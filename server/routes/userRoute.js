const router = require("express").Router();
const userControler = require("../controlers/userControler.js")
const auth = require("../middlewares/auth.js");

//------------Register routes ----------------
router.post("/register", userControler.registerUser);

//------------Login routes ----------------
router.post("/login", userControler.loginUser);

//------------Verify routes ----------------
router.get("/verify", userControler.verifiedToken);

module.exports = router;