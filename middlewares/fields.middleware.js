exports.checkCategoryFields = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      error: "You must provide a name",
    });
  }
  next();
};
