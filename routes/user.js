const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usersCntroller = require("../controllers/users.js");


router.route("/signup")
.get(usersCntroller.renderSignupform)
.post(wrapAsync(usersCntroller.signUp));


router.route("/login")
.get( usersCntroller.renderLoginForm)
.post(
saveRedirectUrl,
 passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
 }),
  usersCntroller.logIn
);



router.get("/logout", usersCntroller.logOut)

module.exports = router;

