import express from "express";
import formRoute from "./route/formRoute.js"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());


mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("DATABASE connected")
}).catch((err) => {
    console.log(err)
})

app.use(express.json());

app.use("/report", formRoute);

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})