import { person } from "./person";

export class teacher extends person {
  courses:string[]=[]

  assignCourse(course:string):void{
    this.courses.push(course)
  }
}