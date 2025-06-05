import mongoose from "mongoose";



const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://navajbloch420:4v3hQIhRh0LvdSvG@cluster0.ykjjvaw.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected:`, conn.connection.host);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
    }

export default connectDB;

