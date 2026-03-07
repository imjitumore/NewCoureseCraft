const express = require("express");
const { registerUser, loginUser } = require("../controllers/AuthController");

const router = express.Router();


router.post("/users/register", registerUser);
router.post("/users/login", loginUser);

module.exports = router;