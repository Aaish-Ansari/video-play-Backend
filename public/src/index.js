import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";
import mongoose from "mongoose";

dotenv.config({
    path: 'D:/CODE/Projects/Backend/.env'
})
connectDB()

