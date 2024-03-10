const express = require("express");
const path = require("path");
const imageRoute = require("./routes/imageRoute");
const multer = require("multer");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/uploads", imageRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log(`Server is listening: http://localhost:${process.env.PORT}`);
});