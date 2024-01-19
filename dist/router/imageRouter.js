"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageController_1 = require("../controller/imageController");
const multer_1 = __importDefault(require("multer"));
// validation check to ensure only image files (e.g., .jpg, .png, .gif)
const image = (0, multer_1.default)({
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg") {
            cb(null, true);
        }
        else {
            cb(null, false);
            // Error message
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },
}).single("image");
const router = express_1.default.Router();
router.route("/post-image").post(image, imageController_1.postImage);
router.route("/get-images").get(imageController_1.getAllImage);
router.route("/:imageID/get-image").get(imageController_1.getOneImage);
exports.default = router;
