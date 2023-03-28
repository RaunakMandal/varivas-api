const Movies = require("../models/movies.model");

exports.getMoviesByCategory = (req, res) => {
  Movies.find({ category: req.params.categoryId })
    .then((movies) =>
      res.status(200).json({
        success: true,
        count: movies.length,
        data: movies,
      })
    )
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: "Something went wrong",
      });
    });
};

exports.createMovie = (req, res) => {
  const {
    title,
    description,
    releaseYear,
    rating,
    ageRating,
    duration,
    category,
    thumbnailUrl,
    trailerUrl,
  } = req.body;

  const movie = new Movies({
    title,
    description,
    releaseYear,
    rating,
    ageRating,
    duration,
    category,
    thumbnailUrl,
    trailerUrl,
  });

  movie
    .save()
    .then((movie) => {
      return res.status(201).json({
        success: true,
        data: movie,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        error: err.message,
      });
    });
};
