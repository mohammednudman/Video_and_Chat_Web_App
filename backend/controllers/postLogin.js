const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    // Check if the user is not registered
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Send new Token
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
      return res.status(200).json({
        userDetails: {
          email: user.email,
          token: token,
          username: user.username,
        },
      });
    }
    return res.status(400).send("Invalid credentials. Please try again");
  } catch (err) {
    return res.status(500).send("Error: Please try again" + err.message);
  }
};

module.exports = postLogin;
