"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const person_1 = require("./person");
class Students extends person_1.person {
    constructor() {
        super(...arguments);
        this.courses = [];
    }
    enrollInCourse(course) {
        this.courses.push(course);
    }
}
exports.Students = Students;
