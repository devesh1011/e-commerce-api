const express = require("express");
const router = express.Router();
const { imageUpload } = require("../controllers/imageController");
const upload = require("../config/storage");

router
  .get("/image", (req, res) => {
    res.render("imageUpload.ejs");
  })
  .post("/image", upload.single("profileImage"), imageUpload);

module.exports = router;
