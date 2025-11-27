import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { ErrorHandler } from "./middlewares/error.middleware";

import userRouter from "./routes/User.routes";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
    console.log("DB connected")
}).catch((err) => {
    console.log("error connecting to DB : ", err);
});


const port = process.env.PORT;
app.get("/ping",  (req, res) => {
    res.json({
        success: true,
        message: "pong"
    });
})

app.use("/api/v1/users", userRouter);

app.use(ErrorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});