import mongoose from "mongoose";


const studentCollection = "students";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    courses: {
        type: Array,
        default: []
    }
})

export const studentModel = mongoose.model(studentCollection, studentSchema);