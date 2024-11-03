"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolManager = void 0;
const Course_1 = require("./Course");
class SchoolManager {
    constructor() {
        this.student = [];
        this.teachers = [];
        this.courses = [];
    }
    addStudent(student) {
        this.student.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    createCourse(name, teacher) {
        const course = new Course_1.Course(name, teacher);
        this.courses.push(course);
        return course;
    }
}
exports.SchoolManager = SchoolManager;
