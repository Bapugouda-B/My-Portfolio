const router = require("express").Router();

const {
  getAbout,
  addAbout,
  getAboutId,
  updateAbout,
  deleteAbout,
} = require("../controlers/aboutControler.js");

//...........about routes.............

//1st way -> get all 'about' data from mongodb server
router.get("/about", getAbout);

//add user 'about' details to mongodb server
router.post("/about", addAbout);

//get specific user 'about' details by id from mongodb server
router.get("/about/:id", getAboutId);

//update specific user 'about' by id from mongodb server
router.put("/about/update/:id", updateAbout);

//delete specific user by id from mongodb server
router.delete("/about/:id", deleteAbout);

module.exports = router;
