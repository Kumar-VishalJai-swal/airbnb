const cloudinary = require("cloudinary").v2;
const { allow } = require("joi");
const { model } = require("mongoose");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "airbnb_DEV",
        allowerFormats: ["png", "jpg", "gpeg"],
    },
});

module.exports = {
    cloudinary,
    storage
}