import { Request, Response } from "express";
import studentModel from "../models/student.model";
import { Student } from "@prisma/client";

// Get all students
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentModel.fetchAllStudents()
    res.status(200).json(students)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to get all students' })
  }
}

// Get student by id
const getStudentById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = Number(req.params.id)
    const student = await studentModel.fetchStudentById(id)
    if (!student) {
      res.status(404).json({ error: 'Student not found' })
      return
    }
    res.status(200).json(student)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to get student by id' })
  }
}

// Add new student
const addStudent = async (req: Request<{}, {}, Omit<Student, 'id'>>, res: Response) => {
  try {
    const { firstname, lastname, age, email } = req.body
    const newStudent = await studentModel.createStudent({ firstname, lastname, age, email })
    res.status(201).json(newStudent)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to add student' })
  }
}

// Update student by id
const updateStudentById = async (req: Request<{ id: string }, {}, Partial<Omit<Student, 'id'>>>, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { firstname, lastname, age, email } = req.body
    const updatedStudent = await studentModel.updateStudent(id, { firstname, lastname, age, email })
    res.status(200).json(updatedStudent)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to update student' })
  }
}

// Delete student by id
const deleteStudentById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = Number(req.params.id)
    const deletedStudent = await studentModel.deleteStudent(id)
    res.status(200).json(deletedStudent)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to delete student' })
  }
}

export default {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById
}