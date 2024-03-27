import dotenv from "dotenv";
if(process.env.NODE_ENV!=="production"){
    dotenv.config()
}
import express from "express";
import mongoose from "mongoose";


const app = express();
const db = process.env.DB_URL


mongoose.connect(db)
.then(()=>{
    console.log("Connected to database")
    app.listen(3001, ()=>{
        console.log("Port 3000 is listening")
    })
})
.catch((error)=>{
    console.log(error)
})
