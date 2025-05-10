import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.mongoDB_url);
    console.log("DB connected")
}

export default connectDB;