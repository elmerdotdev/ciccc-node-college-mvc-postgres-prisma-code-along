import { Router } from "express";
import studentCoursesController from "../controllers/student_courses.controller";

const studentCoursesRouter = Router()

// Routes
studentCoursesRouter.post('/', studentCoursesController.enrollStudentInCourse)
studentCoursesRouter.delete('/', studentCoursesController.unenrollStudentInCourse)

export default studentCoursesRouter