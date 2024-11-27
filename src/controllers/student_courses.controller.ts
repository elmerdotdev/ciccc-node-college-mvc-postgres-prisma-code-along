import { Request, Response } from 'express'
import studentCoursesModel from '../models/student_courses.model'
import { StudentCourses } from '@prisma/client'

// Enroll student in course
const enrollStudentInCourse = async (req: Request<{}, {}, Omit<StudentCourses, 'id'>>, res: Response) => {
  try {
    const { studentId, courseId } = req.body
    const newEnrollment = await studentCoursesModel.enrollStudent(studentId, courseId)
    res.status(201).json(newEnrollment)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to enroll student' })
  }
}

// Un-enroll student in course
const unenrollStudentInCourse = async (req: Request<{}, {}, Omit<StudentCourses, 'id'>>, res: Response) => {
  try {
    const { studentId, courseId } = req.body
    const removedEnrollment = await studentCoursesModel.unenrollStudent(studentId, courseId)
    res.status(200).json(removedEnrollment)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to un-enroll student' })
  }
}

export default {
  enrollStudentInCourse,
  unenrollStudentInCourse
}