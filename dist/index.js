import express from "express";
import { connectionDB } from "./src/config/db.js";
const app = express();
app.get("/", (req, res) => {
    res.send("hello-service");
});
async function startServer() {
    try {
        await connectionDB();
        app.listen(4000, () => {
            console.log("server started on port http://localhost:4000");
        });
    }
    catch (error) {
        console.log(error, "error in starting the server");
    }
}
startServer();
