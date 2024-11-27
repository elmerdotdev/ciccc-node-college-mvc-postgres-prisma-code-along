import { PrismaClient, Course } from "@prisma/client";

const prisma = new PrismaClient()

// Fetch all courses
const fetchAllCourses = async () => {
  return await prisma.course.findMany({ include: { students: { include: { student: true } } } })
}

// Fetch course by id
const fetchCourseById = async (id: number) => {
  return await prisma.course.findUnique({
    where: { id },
    include: { students: { include: { student: true } } }
  })
}

// Create new course
const createCourse = async (data: Omit<Course, 'id'>) => {
  return await prisma.course.create({ data })
}

// Update course by id
const updateCourse = async (id: number, data: Partial<Omit<Course, 'id'>>) => {
  return await prisma.course.update({ where: { id }, data })
}

// Delete course by id
const deleteCourse = async (id: number) => {
  return await prisma.course.delete({ where: { id } })
}

export default {
  fetchAllCourses,
  fetchCourseById,
  createCourse,
  updateCourse,
  deleteCourse
}