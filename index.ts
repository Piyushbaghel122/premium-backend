import express, { Request, Response } from "express";
import { connectionDB } from  "./src/config/db"

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("hello-service");
});

async function startServer(){
    try{
     await connectionDB();
        app.listen(4000, () => {
            console.log("server started on port http://localhost:4000");
        });
    }catch(error){
        console.log(error, "error in starting the server")
    }
}

startServer();