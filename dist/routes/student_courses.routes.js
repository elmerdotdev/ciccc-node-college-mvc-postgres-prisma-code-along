"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_courses_controller_1 = __importDefault(require("../controllers/student_courses.controller"));
const studentCoursesRouter = (0, express_1.Router)();
// Routes
studentCoursesRouter.post('/', student_courses_controller_1.default.enrollStudentInCourse);
studentCoursesRouter.delete('/', student_courses_controller_1.default.unenrollStudentInCourse);
exports.default = studentCoursesRouter;
