import { PrismaClient, Student } from "@prisma/client";

const prisma = new PrismaClient()

// Fetch all students
const fetchAllStudents = async () => {
  return await prisma.student.findMany({include: { courses: { include: { course: true } } } })
}

// Fetch student by id
const fetchStudentById = async (id: number) => {
  return await prisma.student.findUnique({
    where: { id },
    include: { courses: { include: { course: true } } }
  })
}

// Create new student
const createStudent = async (data: Omit<Student, 'id'>) => {
  return await prisma.student.create({ data })
}

// Update student by id
const updateStudent = async (id: number, data: Partial<Omit<Student, 'id'>>) => {
  return await prisma.student.update({ where: { id }, data })
}

// Delete student by id
const deleteStudent = async (id: number) => {
  return await prisma.student.delete({ where: { id } })
}

export default {
  fetchAllStudents,
  fetchStudentById,
  createStudent,
  updateStudent,
  deleteStudent
}