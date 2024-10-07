import mongoose from "mongoose";

async function connectDB() {
    try {
        mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB