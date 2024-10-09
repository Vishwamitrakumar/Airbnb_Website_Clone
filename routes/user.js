const express = require("express");
const { Passport } = require("passport");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsyc = require("../utils/wrapAsyc.js");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js");



router.get("/signup", userController.renderSignupForm);
router.post("/signup", wrapAsyc(userController.Signup));

router.get("/login", userController.renderLoginForm);

router.post('/login', saveRedirectUrl , passport.authenticate('local', { failureRedirect: "/login", failureFlash: true }), userController.login);
router.get("/logout", userController.logout);

module.exports = router;
