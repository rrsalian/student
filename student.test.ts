import { Student } from "./student";

describe("class of Student", () => {
    test("sets correct values on call", () => {
        const newStudent = new Student("Henry", 18 , 12);
        expect(newStudent.name).toEqual('Henry');
        expect(newStudent.age).toEqual(18);
        expect(newStudent.grade).toEqual(12);
    });
    
});
