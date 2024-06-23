import multer from "multer";
import path from "path";

// Function to validate file type
const csvFileFilter = function (req, file, cb) {
  // Accept csv files only
  if (!file.originalname.match(/\.(csv)$/)) {
    return cb(new Error("Only CSV files are allowed!"), false);
  }
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.resolve("public", "files")));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = file.fieldname + "-" + uniqueSuffix + ".csv";

    // Saving the file name in request
    req.fileName = fileName;

    cb(null, fileName);
  },
});

// Adding file filter to multer instance
export const upload = multer({
  storage: storage,
  fileFilter: csvFileFilter,
});
