"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(name, teacher) {
        this.name = name;
        this.teacher = teacher;
        this.students = [];
    }
    enrollStudent(student) {
        this.students.push(student);
    }
}
exports.Course = Course;
