import { Router } from "express";
import {
  listFilesPage,
  uploadFilesPage,
  viewFileDetails,
} from "../controllers/viewPages.controller.js";
import { upload } from "../middlewares/fileUpload.middleware.js";
import { uploadFile } from "../controllers/csvUploader.controller.js";

const csvUploaderRouter = Router();

csvUploaderRouter
  .get("/", uploadFilesPage)
  .post("/api/upload", upload.single("csvfile"), uploadFile)
  .get("/list-of-files", listFilesPage)
  .get("/file-details/:fileName", viewFileDetails);

export default csvUploaderRouter;
