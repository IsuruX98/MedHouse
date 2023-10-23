// userController.js

const User = require("../models/user");

exports.signup = async (req, res) => {
  try {
    const { name, email, gender, password } = req.body;
    const user = new User({ name, email, gender, password });
    await user.save();
    res.json({ status: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error" });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ status: "success" });
    } else {
      res.status(401).json({ status: "error", message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ status: "success", users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error" });
  }
};
