import mongoose from "mongoose";
const connectDb = "mongodb://localhost:27017/premium";
export async function connectionDB() {
    try {
        await mongoose.connect(connectDb);
        console.log("connection to db");
    }
    catch (error) {
        console.log(error, "error in db");
    }
}
