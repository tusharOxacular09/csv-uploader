import { CustomErrorHandler } from "./errorHandler.middleware.js";
import csvParser from "csv-parser";
import fs from "fs";
import path from "path";

export const parsedFileData = (fileName) => {
  return new Promise((resolve, reject) => {
    try {
      const results = [];
      const filePath = path.join(path.resolve("public", "files", fileName));
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on("data", (data) => results.push(data))
        .on("end", () => {
          // Resolve the promise with the results array
          resolve(results);
        })
        .on("error", (error) => {
          // Reject the promise in case of an error
          reject(new CustomErrorHandler(500, "Error While Parsing The File."));
        });
    } catch (error) {
      reject(new CustomErrorHandler(500, "Error While Parsing The File."));
    }
  });
};
