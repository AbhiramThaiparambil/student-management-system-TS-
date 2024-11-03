import { teacher } from "./teacher";
import { Students } from "./students";

export class Course{
    students:Students []=[]
    constructor(public name:string,public teacher:teacher){}

    enrollStudent(student:Students):void{
      this.students.push(student)
    }
}