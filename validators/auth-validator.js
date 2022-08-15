const { body } = require("express-validator");

function registerValidation() {
  return [
    body("username")
      .notEmpty()
      .isLength({ min: 4, max: 20 })
      .withMessage("username is not valid"),
    body("password")
    .notEmpty()
    .withMessage("password is not valid"),
    body("confirm_password")
      .notEmpty()
      .withMessage("confirm password is not valid"),
  ];
}

function loginValidation() {
  return [
    body("username")
      .notEmpty()
      .isLength({ min: 4, max: 20 })
      .withMessage("username is not valid"),
    body("password")
    .notEmpty()
    .withMessage("password is not valid"),
  ];
}

module.exports = {
  registerValidation,
  loginValidation
};
