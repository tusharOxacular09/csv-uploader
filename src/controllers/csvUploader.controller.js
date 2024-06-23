import { fileModel } from "../models/files.model.js";
import { CustomErrorHandler } from "../middlewares/errorHandler.middleware.js";

// Upload File
export const uploadFile = async (req, res, next) => {
  try {
    if (!req.file) {
      return CustomErrorHandler(400, "Please upload a CSV file!");
    }

    const fileName = req.fileName;
    // Saving the file name
    await fileModel.create({
      fileName: fileName,
      filePath: `/public/files/${fileName}`,
    });

    // Sending Suessful Message
    return res.status(200).json({
      success: true,
      message: "File Uploaded Suessfully.",
    });
  } catch (error) {
    next(error);
  }
};
