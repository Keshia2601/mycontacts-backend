
const asyncHandler = require("express-async-handler")
//@desc Register a user
//@route Get /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "User registered successfully" });
});

//@desc Login a user
//@route Get /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Logged in successfully" });
});

//@desc Current user
//@route Get /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user info" });
});

module.exports = {registerUser, loginUser, currentUser}