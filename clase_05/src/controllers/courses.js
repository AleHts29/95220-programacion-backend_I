// import * as courseService from "../services/daoFileSystem/courses.service.js";
import CourseService from "../services/daoMongo/courses.services.js";

const courseService = new CourseService();

export const courses = async (req, res) => {
    try {
        console.log("Getting all courses from MongoDB");
        const courses = await courseService.getAll();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export const saveCourse = async (req, res) => {
    try {
        const course = await courseService.create(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}