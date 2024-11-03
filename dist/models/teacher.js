"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacher = void 0;
const person_1 = require("./person");
class teacher extends person_1.person {
    constructor() {
        super(...arguments);
        this.courses = [];
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
exports.teacher = teacher;
