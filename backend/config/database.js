import mongoose from "mongoose";

export const dbConnect = async() => {
  try {
     await mongoose.connect(process.env.MONGODB_URL);
     console.log("DB connect successfully");
  } catch (error) {
    console.log("DB connect issue" , error);
  }
}