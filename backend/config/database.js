import mongoose from "mongoose";

const dbConnect = async() => {

  try {

    await mongoose.connect(process.env.MONGODB_URL);
   console.log("Mongodb connect successfully")

  } catch (error) {
    console.log("DB connect issue " , error);
    

  }
  
}

export default dbConnect;