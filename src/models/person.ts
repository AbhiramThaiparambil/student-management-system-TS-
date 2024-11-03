

export class person {
    constructor(public name:string ,public age:string){

    }
        displayInfo():String{
            return `name ${this.name} age ${this.age}`;
        }
    
}