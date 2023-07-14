import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./db.js";
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"
dotenv.config();
const app =express();
app.use(cors());
app.use(express.json(({limit:"50mb"})))
app.use("/api/v1/post" ,postRoutes);
app.use("/api/v1/dalle" ,dalleRoutes);
app.get("/",(req,res)=>{
    res.send("hellllllllooooo")
})

const start=async()=>{app.listen(5000,()=>{
        try {
            connectDb(process.env.MONGODB_URI)
            console.log("starting server")
        } catch (error) {
            console.log(err)
        }
    })}
start();