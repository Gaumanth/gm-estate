import express from "express";
import mongoose from "mongoose";
import dotenv, { config } from "dotenv";

dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
  console.log("Connected to DB..")
}).catch((err)=>{
  console.log(err);
})
const app = express();

app.listen(5000,()=>{
  console.log("Server is running on port 3000....")
})






































































































































































































































































































