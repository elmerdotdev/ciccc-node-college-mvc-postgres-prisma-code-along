import { Request, Response } from "express";
import courseModel from "../models/course.model";
import { Course } from "@prisma/client";

// Get all courses
const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await courseModel.fetchAllCourses()
    res.status(200).json(courses)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to get all courses' })
  }
}

// Get course by id
const getCourseById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = Number(req.params.id)
    const course = await courseModel.fetchCourseById(id)
    if (!course) {
      res.status(404).json({ error: 'Course not found' })
      return
    }
    res.status(200).json(course)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to get course by id' })
  }
}

// Add new course
const addCourse = async (req: Request<{}, {}, Omit<Course, 'id'>>, res: Response) => {
  try {
    const { courseName } = req.body
    const newCourse = await courseModel.createCourse({ courseName })
    res.status(201).json(newCourse)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Unable to add course" })
  }
}

// Update course by id
const updateCourseById = async (req: Request<{ id: string }, {}, Partial<Omit<Course, 'id'>>>, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { courseName } = req.body
    const updatedCourse = await courseModel.updateCourse(id, { courseName })
    res.status(200).json(updatedCourse)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to update course' })
  }
}

// Delete course by id
const deleteCourseById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = Number(req.params.id)
    const deletedCourse = await courseModel.deleteCourse(id)
    res.status(200).json(deletedCourse)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to delete course' })
  }
}

export default {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourseById,
  deleteCourseById
}