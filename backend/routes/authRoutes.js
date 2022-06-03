// Importing the Libraries module
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const auth = require("../middleware/authMiddleware");
// Using JOI for FORM Validation
const joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

// Creating the registerSchema and validating the inputs
const registerSchema = joi.object({
  username: joi.string().min(3).max(12).required(),
  password: joi.string().min(6).max(20).required(),
  email: joi.string().email().required(),
});

// Creating the loginSchema and validating the inputs
const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).max(20).required(),
});

// Creating routes for the registration and login
router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);

router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

router.get("/test", auth, (req, res) => {
  res.send("Request Passed");
});

module.exports = router;
