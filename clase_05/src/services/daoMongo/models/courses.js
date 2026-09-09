import mongoose from "mongoose";


const courseCollection = "courses";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    teacherName: {
        type: String,
        required: true
    },
    students: {
        type: Array,
        default: []
    }

})

export const courseModel = mongoose.model(courseCollection, courseSchema);