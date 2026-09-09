import StudentService from "../services/daoFileSystem/students.service.js";
// import StudentService from "../services/daoMongo/students.services.js";

const studentService = new StudentService();

// students
// saveStudent

export const students = async (req, res) => {
    try {
        const students = await studentService.getAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export const saveStudent = async (req, res) => {
    try {
        const student = await studentService.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




// cliente <--> App.js <--> Router <--> Controller <--> Service <--> DAO <--> DB 