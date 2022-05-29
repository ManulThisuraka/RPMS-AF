const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".pdf" && ext !== ".docx") {
      return cb(new Error("Only pdf files are allowed"));
    }
    cb(null, true);
  },
});
