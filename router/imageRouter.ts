import express from "express";
import {
  postImage,
  getAllImage,
  getOneImage,
} from "../controller/imageController";
import multer from "multer";



// validation check to ensure only image files (e.g., .jpg, .png, .gif)
const image = multer({
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);

      // Error message
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
}).single("image");




const router = express.Router();



router.route("/post-image").post(image, postImage);
router.route("/get-images").get(getAllImage);
router.route("/:imageID/get-image").get(getOneImage);

export default router;
