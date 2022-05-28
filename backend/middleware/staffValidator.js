const { check, validationResult } = require("express-validator");

//Validation for Signup
exports.StaffsignupValidator = [
  check("firstName").not().isEmpty().trim().withMessage("All fields required"),
  check("lastName").not().isEmpty().trim().withMessage("All fields required"),
  check("staffId").not().isEmpty().trim().withMessage("All fields required"),
  check("designationType")
    .not()
    .isEmpty()
    .trim()
    .withMessage("All fields required"),
  check("topicArea").not().isEmpty().trim().withMessage("All fields required"),
  check("email").isEmail().normalizeEmail().withMessage("Invalid email"),
  check("username").not().isEmpty().trim().withMessage("All fields required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

//Validation result

exports.validatorResult = (req, res, next) => {
    const result = validationResult(req);
    const hasErrors = !result.isEmpty();
  
    if (hasErrors) {
      const firstError = result.array()[0].msg;
      return res.status(400).json({
        errorMessage: firstError,
      });
    }
  
    next();
  };