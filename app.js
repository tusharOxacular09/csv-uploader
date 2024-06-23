import express from "express";
import { errorHandlerMiddleware } from "./src/middlewares/errorHandler.middleware.js";
import { invalidRoutesHandlerMiddleware } from "./src/middlewares/invalidRoute.middleware.js";

const app = express();


app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to file uploader."
    })
})

// Invalid Route
app.use(invalidRoutesHandlerMiddleware);

// Handeling Errors in Application Level
app.use(errorHandlerMiddleware);

export default app;
