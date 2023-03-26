const express = require("express");
const {
  getMoviesByCategory,
  createMovie,
} = require("../controllers/movies.controller");
const router = express.Router();

router.post("/create", createMovie);
router.get("/:categoryId", getMoviesByCategory);

module.exports = router;
