"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `name ${this.name} age ${this.age}`;
    }
}
exports.person = person;
