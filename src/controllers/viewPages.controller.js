import { fileModel } from "../models/files.model.js";
import { CustomErrorHandler } from "../middlewares/errorHandler.middleware.js";

// Upload CSV File Page
export const uploadFilesPage = (req, res, next) => {
  try {
    return res.render("layout", { view: "pages/upload-file" });
  } catch (error) {
    next(error);
  }
};

// File List Page
export const listFilesPage = async (req, res, next) => {
  try {
    const files = await fileModel.find({});

    if (!files) {
      throw new CustomErrorHandler(400, "No Files Uploaded.");
    }

    return res.render("layout", { view: "pages/list-of-files", files });
  } catch (error) {
    next(error);
  }
};

// View File Details
export const viewFileDetails = async (req, res, next) => {
  try {
    const fileData = {
      fileName: req.params.fileName,
    };
    return res.render("layout", { view: "pages/file-details", fileData });
  } catch (error) {
    next(error);
  }
};
