import { Router } from "express";
import * as coursesController from "../controllers/courses.js";

const router = Router();

router.get("/", coursesController.courses);
router.post("/", coursesController.saveCourse);

export default router;