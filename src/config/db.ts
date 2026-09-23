import mongoose from "mongoose";

export const connectionDB = async () => {
    try {
        // Replace with your actual MongoDB connection string
        // await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/your_db_name");
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
};
