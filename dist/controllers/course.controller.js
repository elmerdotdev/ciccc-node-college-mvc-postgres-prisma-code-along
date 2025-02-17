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
const course_model_1 = __importDefault(require("../models/course.model"));
// Get all courses
const getAllCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield course_model_1.default.fetchAllCourses();
        res.status(200).json(courses);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to get all courses' });
    }
});
// Get course by id
const getCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const course = yield course_model_1.default.fetchCourseById(id);
        if (!course) {
            res.status(404).json({ error: 'Course not found' });
            return;
        }
        res.status(200).json(course);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to get course by id' });
    }
});
// Add new course
const addCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseName } = req.body;
        const newCourse = yield course_model_1.default.createCourse({ courseName });
        res.status(201).json(newCourse);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Unable to add course" });
    }
});
// Update course by id
const updateCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const { courseName } = req.body;
        const updatedCourse = yield course_model_1.default.updateCourse(id, { courseName });
        res.status(200).json(updatedCourse);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to update course' });
    }
});
// Delete course by id
const deleteCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const deletedCourse = yield course_model_1.default.deleteCourse(id);
        res.status(200).json(deletedCourse);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to delete course' });
    }
});
exports.default = {
    getAllCourses,
    getCourseById,
    addCourse,
    updateCourseById,
    deleteCourseById
};
