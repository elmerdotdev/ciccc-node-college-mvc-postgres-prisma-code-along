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
// Enroll student
const enrollStudent = (studentId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.studentCourses.create({
        data: { studentId, courseId }
    });
});
// Un-enroll student
const unenrollStudent = (studentId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.studentCourses.delete({
        where: {
            studentId_courseId: { studentId, courseId }
        }
    });
});
exports.default = {
    enrollStudent,
    unenrollStudent
};
