const { check, validationResult, body } = require("express-validator");

exports.validationBodyRules = [
  check("name").isLength({ min: 1 }).withMessage("Name is required"),
];

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(422).json({
    success: false,
    error: errors.array()[0].msg,
  });
};
