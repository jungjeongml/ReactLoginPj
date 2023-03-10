const express = require("express");
const router = express.Router();

const users = require("../src/users/user.route");
const auth = require("../src/auths/auth.route");

router.use("/users", users);
router.use("/auth", auth);

module.exports = router;
