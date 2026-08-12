import express from "express";
import router from "./router/router.js";

const app = express();
const PORT = 8082;


// vervos HTTP
// GET, POST, PUT, DELETE

app.get("/", (req, res) => {
    res.send("Home!");
});


app.use("/api/router", router);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})