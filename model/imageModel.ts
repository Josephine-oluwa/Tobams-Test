import mongoose from "mongoose";
import { Image } from "../utils/imageInterface";

interface iImage extends Image, mongoose.Document {}

const imageModel = new mongoose.Schema<iImage>(
  {
    image: {
      type: String,
    },
    imageID: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<iImage>("images", imageModel);
