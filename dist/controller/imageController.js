"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneImage = exports.getAllImage = exports.postImage = void 0;
const imageModel_1 = __importDefault(require("../model/imageModel"));
const mainError_1 = require("../Error/mainError");
const streamifier_1 = require("../utils/streamifier");
// upload Image
const postImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { secure_url, public_id } = yield (0, streamifier_1.streamUpload)(req);
        // create and secure image
        const Image = yield imageModel_1.default.create({
            image: secure_url,
            imageID: public_id,
        });
        return res.status(mainError_1.HTTP.CREATED).json({
            message: "Image has successfully been uploaded",
            data: Image,
        });
    }
    catch (error) {
        new mainError_1.mainError({
            name: "image creation error",
            message: `This error came while trying to create the image`,
            status: mainError_1.HTTP.BAD_REQUEST,
            success: false,
        });
        return res
            .status(mainError_1.HTTP.BAD_REQUEST)
            .json({ message: "Error", data: error.message });
    }
});
exports.postImage = postImage;
// get All Images Posted
const getAllImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = yield imageModel_1.default.find();
        return res.status(mainError_1.HTTP.OK).json({
            message: "All Images Found",
            data: image,
        });
    }
    catch (error) {
        new mainError_1.mainError({
            name: "images getting error",
            message: `This error came while trying to get all the images`,
            status: mainError_1.HTTP.BAD_REQUEST,
            success: false,
        });
        return res.status(mainError_1.HTTP.BAD_REQUEST).json({ message: "Error" });
    }
});
exports.getAllImage = getAllImage;
// get One image
const getOneImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { imageID } = req.params;
        const image = yield imageModel_1.default.findById(imageID);
        return res.status(mainError_1.HTTP.OK).json({
            message: "one image has been found",
            data: image,
        });
    }
    catch (error) {
        new mainError_1.mainError({
            name: "image getting error",
            message: `This error came while trying to get one image`,
            status: mainError_1.HTTP.BAD_REQUEST,
            success: false,
        });
        return res
            .status(mainError_1.HTTP.BAD_REQUEST)
            .json({ message: "Error", data: error.message });
    }
});
exports.getOneImage = getOneImage;
