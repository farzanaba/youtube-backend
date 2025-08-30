import dotenv from "dotenv"
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({path: './.env'})


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true})) // space is equal to %20 convert
app.use(cookieParser())
app.use(express.static("public"))

// routes imports

import userRouter from "./routes/user.routes.js"

// declaration for routes
app.use("/api/v1/users", userRouter)



export { app }