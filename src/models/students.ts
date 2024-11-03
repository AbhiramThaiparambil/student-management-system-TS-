import { person } from "./person";

export class Students extends person{
 courses: string[]=[];

 enrollInCourse(course:string):void{
    this.courses.push(course)
 }
}