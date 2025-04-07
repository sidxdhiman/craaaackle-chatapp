import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://sidharth:caqeu5ts1izq2PK0@chat-app.lgm5ozi.mongodb.net/?retryWrites=true&w=majority&appName=chat-app");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);        
  }
};
