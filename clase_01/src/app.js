import express from "express";
import router from "./router/router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT;



// vervos HTTP
// GET, POST, PUT, DELETE

app.get("/", (req, res) => {
    res.send("Home!");
});


app.use("/api/router", router);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})