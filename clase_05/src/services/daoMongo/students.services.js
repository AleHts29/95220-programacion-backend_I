import { studentModel } from "./models/students.js";

export default class StudentsServices {
    constructor() {
        console.log("Working with MongoDB");
    }

    async getAll() {
        return await studentModel.find({});
    }


    async save(student) {
        return await studentModel.create(student);
    }
}