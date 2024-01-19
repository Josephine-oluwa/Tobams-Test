import { Response } from "express";
import ImageModel from "../model/imageModel";
import { HTTP, mainError } from "../Error/mainError";
import { streamUpload } from "../utils/streamifier";



// upload Image
export const postImage = async (req: any, res: Response) => {
  try {
    const { secure_url, public_id }: any = await streamUpload(req);

      // create and secure image
    const Image = await ImageModel.create({
      image: secure_url,
      imageID: public_id,
    });

    return res.status(HTTP.CREATED).json({
      message: "Image has successfully been uploaded",
      data: Image,
    });
  } catch (error: any) {
    new mainError({
      name: "image creation error",
      message: `This error came while trying to create the image`,
      status: HTTP.BAD_REQUEST,
      success: false,
    });
    return res
      .status(HTTP.BAD_REQUEST)
      .json({ message: "Error", data: error.message });
  }
};



// get All Images Posted
export const getAllImage = async (req: any, res: Response) => {
  try {
    const image = await ImageModel.find();

    return res.status(HTTP.OK).json({
      message: "All Images Found",
      data: image,
    });
  } catch (error) {
    new mainError({
      name: "images getting error",
      message: `This error came while trying to get all the images`,
      status: HTTP.BAD_REQUEST,
      success: false,
    });
    return res.status(HTTP.BAD_REQUEST).json({ message: "Error" });
  }
};




// get One image
export const getOneImage = async (req: any, res: Response) => {
  try {
    const { imageID } = req.params;

    const image = await ImageModel.findById(imageID);

    return res.status(HTTP.OK).json({
      message: "one image has been found",
      data: image,
    });
  } catch (error: any) {
    new mainError({
      name: "image getting error",
      message: `This error came while trying to get one image`,
      status: HTTP.BAD_REQUEST,
      success: false,
    });
    return res
      .status(HTTP.BAD_REQUEST)
      .json({ message: "Error", data: error.message });
  }
};
