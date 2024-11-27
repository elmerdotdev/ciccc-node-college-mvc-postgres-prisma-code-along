import express from 'express'
import studentRouter from './routes/student.routes'
import courseRouter from './routes/course.routes'
import studentCoursesRouter from './routes/student_courses.routes'
import dotenv from 'dotenv'
dotenv.config()

// Create server
const app = express()

// Middleware
app.use(express.json())

// Routes
app.use('/api/students', studentRouter)
app.use('/api/courses', courseRouter)
app.use('/api/enrollments', studentCoursesRouter)

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})