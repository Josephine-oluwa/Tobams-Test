This code provides three endpoints:


1. Uploading Image
POST /upload: This endpoint accepts an image file and saves it to the MongoDB database.

Image Upload API

Endpoint
POST /upload

Request Parameters - Body
Form Data: image - The image file to be uploaded (e.g., .jpg, .png, .gif)

Response Format
Successful Response (HTTP 201 Created)
{
  "message": "Image uploaded successfully"
}

Error Response (HTTP 400 Bad Request)
{
  "error": "Invalid image file. Please upload a valid image."
}




2. Getting all images
GET /get_images: This endpoint retrieves all the saved images by its MongoDB ID and returns a secure URL for you to access the images.

Get Images API

Endpoint
GET /get_image

Request Parameters
find-images

Response Format
Successful Response (HTTP 200 OK)
{
  All images found"
}

Error Response (HTTP 404 Not Found)
{
  "error": "Images getting error"
}




3. Getting one image
GET /get_image/:id: This endpoint retrieves the saved image by its MongoDB ID and returns a secure URL for the client to access the image.

Get Image API

Endpoint
GET /get_image/:id

Request Parameters
URL Parameter
id: The MongoDB ID of the uploaded image

Response Format
Successful Response (HTTP 200 OK)
{
  "imageUrl": "/get_image/:id"
}

Error Response (HTTP 404 Not Found)
{
  "error": "Image not found"
}

NOTES
1. Make sure to replace {image_id} with the actual MongoDB ID of the uploaded image.
2. The uploaded image file should be sent as a multipart/form-data request.
3. Ensure that your MongoDB server is running and accessible.
4. Proper error handling is implemented, so refer to the error messages for troubleshooting in case of issues.




PROJECT TITLE 
TOBAMS GROUP Image Upload and GET Endpoint.




PROJECT DESCRIPTION
Oluwafemi Josephine worked on a basic web application backend written in TypeScript using the Express.js framework. 
This application provides three main API endpoints for handling image uploads and retrieving images. 

Here's a summary of the key features:

Image Upload Endpoint (POST /upload):
1. Accepts image files via a multipart/form-data request.
2. Uses the Multer middleware for handling file uploads.
3. Validates that the uploaded file is an image (e.g., .jpg, .png, .gif) using multer.
4. Stores the uploaded image in a MongoDB database using Mongoose.
5. Get Image Endpoint (GET /get_image/:id):
6. Retrieves a previously uploaded image from the MongoDB database based on its ID.
7. Constructs a secure URL for you to access the image.

Validation and Error Handling:
1. Uses multer for input validation to ensure that only valid image files are accepted.
2. Implements proper error handling throughout the application, providing informative error messages in case of issues such as invalid credentials, file validation failure, or database errors.
3. Includes an error handling middleware to catch unexpected errors and respond with a generic error message.



MongoDB Integration:
1. stablishes a connection to a MongoDB database using Mongoose.
2. Defines a Mongoose model (Image) for storing image data in the database.



Installations 
Dependencies 
 "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "cloudinary": "^1.41.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^8.1.0",
    "multer": "^1.4.5-lts.1",
    "streamifier": "^0.1.1"
  
  "name": "tobams-group",
  "version": "1.0.0",
  "main": "index.js",
  "devDependencies": 
    "@types/multer": "^1.4.11",
    "@types/streamifier": "^0.1.2"

    Processes
   1. Create a folder 
   2. Create Sub folders and files 
   3. npm i all the dependencies above in your terminal
   4. npm init y (elements will be added to package.json)
   5. type  "start": "ts-node-dev --respawn index.ts" in package json
   6. npm start
   7. test on your postman



LICENSE 
This project is licensed under Josephine Oluwafemi and Tobams Group 



ACKNOWLEDGEMENT 
I want to say a very gig Thank you to Tobams Group for giving me the opportunity to participate in this second stage Assessment. 
I hope and i pray i meet all the necessary requirements as it will be an answered prayers. 





