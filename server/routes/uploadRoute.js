const router = require("express").Router();

const cloudinary = require("cloudinary");
const { publicDecrypt } = require("crypto");
const fs = require("fs");

// For uploading images to the cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Post Method-> Uploading images

router.post("/upload", (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded");
    }
    const file = req.files.file;
    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size is too large" });
    }
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Incorrect file formate" });
    }

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: "MyImages" },
      async (error, result) => {
        if (error) throw error;

        removeTmp(file.tempFilePath);
        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    );
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Delete Method : Deleting Images from Cloudinary  Storage
router.post("/delete", (req, res) => {
  const { public_id } = req.body;
  try {
    if (!public_id) {
      return res.status(400).json({ msg: "No Images Selected" });
    }
    cloudinary.v2.uploader.destroy(public_id, async (error, result) => {
      if (error) throw error;
      res.json({ msg: "Images deleted successfully" });
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


const removeTmp = (path) => {
  fs.unlink(path, (error) => {
    if (error) throw error;
  });
};

module.exports = router;
