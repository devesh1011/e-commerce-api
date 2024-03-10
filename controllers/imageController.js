const imageUpload = (req, res, next) => {
  console.log(req.body);
  console.log(req.file);

  res.redirect("/");
};

module.exports = {
  imageUpload,
};
