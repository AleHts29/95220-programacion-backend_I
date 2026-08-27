import { Router } from 'express';

const router = Router();

router.get("/hello", (req, res) => {
    res.send("Hello, World!");
});


router.get("/goodbye", (req, res) => {
    res.send("Goodbye, World!");
});


router.get("/products", (req, res) => {
    res.send("Goodbye, World!");
});

export default router;