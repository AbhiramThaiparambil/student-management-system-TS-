import { Students } from "./students"
import { teacher } from "./teacher"
import { Course } from "./Course"


export class SchoolManager{
    student:Students[]=[]
    teachers:teacher[]=[]
    courses:Course[]=[]
    

    addStudent(student:Students):void{
        this.student.push(student)
    }
    addTeacher(teacher:teacher):void{
        this.teachers.push(teacher)
    }

    createCourse(name:string,teacher:teacher):Course{
           const course = new Course(name,teacher)
           this.courses.push(course)
           return course
    }


}