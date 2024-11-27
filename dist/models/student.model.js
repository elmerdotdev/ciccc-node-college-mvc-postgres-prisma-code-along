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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Fetch all students
const fetchAllStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.student.findMany({ include: { courses: { include: { course: true } } } });
});
// Fetch student by id
const fetchStudentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.student.findUnique({
        where: { id },
        include: { courses: { include: { course: true } } }
    });
});
// Create new student
const createStudent = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.student.create({ data });
});
// Update student by id
const updateStudent = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.student.update({ where: { id }, data });
});
// Delete student by id
const deleteStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.student.delete({ where: { id } });
});
exports.default = {
    fetchAllStudents,
    fetchStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};
