const router = require("express").Router();
const {
  getEducation,
  getEducationId,
  addEducation,
  updateEducation,
  deleteEducation,
} = require("../controlers/educationControler.js");


//...........education routes.............

//1st way -> get all 'education' data from mongodb server
router.get("/education", getEducation);

//add user 'education' details to mongodb server
router.post("/education", addEducation);

//get specific user 'education' details by id from mongodb server
router.get("/education/:id", getEducationId);

//update specific user 'education' by id from mongodb server
router.put("/education/update/:id", updateEducation);

//delete specific user "education" by id from mongodb server
router.delete("/education/:id", deleteEducation);

module.exports = router;
