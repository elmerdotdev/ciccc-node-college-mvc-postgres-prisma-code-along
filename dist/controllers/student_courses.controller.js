"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_courses_model_1 = __importDefault(require("../models/student_courses.model"));
// Enroll student in course
const enrollStudentInCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId, courseId } = req.body;
        const newEnrollment = yield student_courses_model_1.default.enrollStudent(studentId, courseId);
        res.status(201).json(newEnrollment);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to enroll student' });
    }
});
// Un-enroll student in course
const unenrollStudentInCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId, courseId } = req.body;
        const removedEnrollment = yield student_courses_model_1.default.unenrollStudent(studentId, courseId);
        res.status(200).json(removedEnrollment);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to un-enroll student' });
    }
});
exports.default = {
    enrollStudentInCourse,
    unenrollStudentInCourse
};
