const Category = require("../models/categories.model");

const rephraseError = (err) => {
  if (err.code === 11000) {
    return "Category already exists";
  } else {
    return err.message;
  }
};

exports.createCategory = (req, res) => {
  const { name } = req.body;
  const category = new Category({
    name,
  });

  category
    .save()
    .then((category) => {
      return res.status(201).json({
        success: true,
        data: category,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        error: rephraseError(err),
      });
    });
};

exports.getCategories = (req, res) => {
  Category.find()
    .then((categories) => {
      return res.status(200).json({
        success: true,
        count: categories.length,
        data: categories,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        error: rephraseError(err),
      });
    });
};
