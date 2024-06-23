import express from "express";
import path from "path";
import bodyParser from "body-parser";
import csvUploaderRouter from "./src/routes/csvUploader.router.js";
import { errorHandlerMiddleware } from "./src/middlewares/errorHandler.middleware.js";
import { invalidRoutesHandlerMiddleware } from "./src/middlewares/invalidRoute.middleware.js";

const app = express();

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve("src", "views")));
app.use(express.static("public"));

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(csvUploaderRouter);

// Invalid Route
app.use(invalidRoutesHandlerMiddleware);

// Handeling Errors in Application Level
app.use(errorHandlerMiddleware);

export default app;
