const express = require("express");
const {
  getCategories,
  createCategory,
} = require("../controllers/categories.controller");
const {
  validationBodyRules,
  validate,
} = require("../middlewares/categories.middleware");
const router = express.Router();

router.get("/", getCategories);
router.post("/create", validationBodyRules, validate, createCategory);

module.exports = router;
