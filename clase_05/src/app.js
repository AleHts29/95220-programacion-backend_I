import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/students.js";
import coursesRouter from "./routes/courses.js";

const app = express();

const PORT = 8082;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Rutas
app.use("/api/students", studentRouter)
app.use("/api/courses", coursesRouter)


app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto " + PORT);
});


const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/colegio?retryWrites=true&w=majority");
        console.log("Conexión a MongoDB establecida");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
    }
};

connectMongoDB();