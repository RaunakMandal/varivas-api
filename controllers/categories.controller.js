const Category = require("../models/categories.model");

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
        error: err.message,
      });
    });
};

exports.getCategories = (req, res) => {
  Category.find()
    .then((categories) => {
      return res.status(200).json({
        success: true,
        count: categories.length,
        data: categories.map((category) => {
          return {
            _id: category._id,
            name: category.name,
          };
        }),
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: "Something went wrong",
      });
    });
};
