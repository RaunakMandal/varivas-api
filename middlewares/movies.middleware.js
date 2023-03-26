exports.validations = [
  check("title").isLength({ min: 1 }).withMessage("Title is required"),
  check("description")
    .isLength({ min: 1 })
    .withMessage("Description is required"),
  check("releaseYear")
    .isLength({ min: 1 })
    .withMessage("Release year is required")
    .isNumeric()
    .withMessage("Release year must be a number"),
  check("rating")
    .isLength({ min: 1 })
    .withMessage("Rating is required")
    .isNumeric()
    .withMessage("Rating must be a number"),

  check("ageRating").isLength({ min: 1 }).withMessage("Age rating is required"),
  check("duration")
    .isLength({ min: 1 })
    .withMessage("Duration is required")
    .isNumeric()
    .withMessage("Duration must be a number"),
  check("category").isLength({ min: 1 }).withMessage("Category is required"),
  check("thumbnailUrl")
    .isLength({ min: 1 })
    .withMessage("Thumbnail URL is required"),
  check("trailerUrl")
    .isLength({ min: 1 })
    .withMessage("Trailer URL is required"),
];

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ msg: err.msg }));

  return res.status(422).json({
    success: false,
    error: extractedErrors,
  });
};
