// Imports
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const userExists = await User.exists({
      email: email.toLowerCase(),
    });
    if (userExists) {
      return res.status(409).send("User already exists");
    }

    // Encrypt the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user document and save in database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(201).json({
      userDetails: {
        username: user.username,
        email: user.email,
        token: token,
      },
    });
  } catch (err) {
    return res.status(500).send("Error occured: Please try again");
  }
};

module.exports = postRegister;
