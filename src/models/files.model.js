import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    fileName: String,
    filePath: String,
  },
  { timestamps: true }
);

export const fileModel = mongoose.model("Files", fileSchema);
