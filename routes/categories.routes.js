const express = require("express");
const {
  getCategories,
  createCategory,
} = require("../controllers/categories.controller");
const { checkCategoryFields } = require("../middlewares/fields.middleware");
const router = express.Router();

router.get("/", getCategories);
router.post("/create", checkCategoryFields, createCategory);

module.exports = router;
