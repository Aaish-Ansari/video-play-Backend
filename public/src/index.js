import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config({
    path: 'D:/CODE/Projects/Backend/.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`App is Listening on port ${process.env.PORT}`) 
    })
    app.on("ERROR" ,(error)=>{
        console.log("ERROR !!" ,error);
        throw error
    })

})
.catch((error)=>{
    console.log(`MongoDB connection failed !! ${error}`)
})

