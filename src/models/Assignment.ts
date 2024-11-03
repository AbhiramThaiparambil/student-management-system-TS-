class  Assignment{
    constructor(
        public title:string,
        public dueDate: Date,
        public grade?: number
    ){}
    setGrade(grade:number):void{
       this.grade=grade
    }
} 