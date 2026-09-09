import { courseModel } from "./models/courses.js";

export default class CoursesServices {
    constructor() {
        console.log("Working with MongoDB");
    }

    getAll() {
        console.log("Getting all courses from MongoDB");
        return courseModel.find({});
    }


    save(course) {
        return courseModel.create(course);
    }
}