"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_routes_1 = __importDefault(require("./routes/student.routes"));
const course_routes_1 = __importDefault(require("./routes/course.routes"));
const student_courses_routes_1 = __importDefault(require("./routes/student_courses.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create server
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/api/students', student_routes_1.default);
app.use('/api/courses', course_routes_1.default);
app.use('/api/enrollments', student_courses_routes_1.default);
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
