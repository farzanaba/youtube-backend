import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({path: './.env'})

connectDB()
.then(() => {

    // before listen display an error 
    app.on("error", (error) => {
        console.log("ERRR:", error);
        throw error
    })

    app.listen(process.env.PORT || 4000, () => {
        console.log("Server is running of PORT", process.env.PORT)
    })
})
.catch((err) => {
    console.log("MONGODB connection error !!!", err)
})

