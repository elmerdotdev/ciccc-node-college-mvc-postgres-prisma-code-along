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
const student_model_1 = __importDefault(require("../models/student.model"));
// Get all students
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_model_1.default.fetchAllStudents();
        res.status(200).json(students);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to get all students' });
    }
});
// Get student by id
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const student = yield student_model_1.default.fetchStudentById(id);
        if (!student) {
            res.status(404).json({ error: 'Student not found' });
            return;
        }
        res.status(200).json(student);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to get student by id' });
    }
});
// Add new student
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, age, email } = req.body;
        const newStudent = yield student_model_1.default.createStudent({ firstname, lastname, age, email });
        res.status(201).json(newStudent);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to add student' });
    }
});
// Update student by id
const updateStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const { firstname, lastname, age, email } = req.body;
        const updatedStudent = yield student_model_1.default.updateStudent(id, { firstname, lastname, age, email });
        res.status(200).json(updatedStudent);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to update student' });
    }
});
// Delete student by id
const deleteStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const deletedStudent = yield student_model_1.default.deleteStudent(id);
        res.status(200).json(deletedStudent);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to delete student' });
    }
});
exports.default = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudentById,
    deleteStudentById
};
