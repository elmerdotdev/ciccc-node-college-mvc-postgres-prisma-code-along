import { PrismaClient, StudentCourses } from "@prisma/client";

const prisma = new PrismaClient()

// Enroll student
const enrollStudent = async (studentId: number, courseId: number) => {
  return await prisma.studentCourses.create({
    data: { studentId, courseId }
  })
}

// Un-enroll student
const unenrollStudent = async (studentId: number, courseId: number) => {
  return await prisma.studentCourses.delete({
    where: {
      studentId_courseId: { studentId, courseId }
    }
  })
}

export default {
  enrollStudent,
  unenrollStudent
}