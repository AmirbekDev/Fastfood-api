import express from "express";
import cors from "cors"
import authRoute from "./auth/routes"
import userRoute from "./manage/routes"
import categoryRoute from "./category/routes"
import "./setup"
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/v1", authRoute, userRoute, categoryRoute)
const port = +process.env.SERVER_PORT!

app.listen(port, () => {
    console.log("Server is running");
})