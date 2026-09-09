import { Router } from "express";
import * as studentsController from "../controllers/students.js";

const router = Router();

router.get("/", studentsController.students);
router.post("/", studentsController.saveStudent);

export default router;