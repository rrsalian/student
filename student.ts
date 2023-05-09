export class Student {
   
    name: string;
    age: number;
    grade: number;
    classGrades:number[] = [];    

    constructor(name: string, age: number, grade: number) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    addClassGrade(score:number) {
        this.classGrades.push(score);
    }
}

const student1 = new Student('raj',15, 10);
const student2 = new Student('Sam', 14, 9);
const student3 = new Student('john', 12 , 7);
student1.addClassGrade(100);

//console.log(student1.classGrades);


