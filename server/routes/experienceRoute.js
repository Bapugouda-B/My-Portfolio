const router = require("express").Router();
const {
    getExperience,
    getExperienceId,
    addExperience,
    updateExperience,
    deleteExperience,
  } = require("../controlers/experienceControler.js");
  
  
  //...........experience routes.............
  
  //1st way -> get all 'experience' data from mongodb server
  router.get("/experience", getExperience);
  
  //add user 'experience' details to mongodb server
  router.post("/experience", addExperience);
  
  //get specific user 'experience' details by id from mongodb server
  router.get("/experience/:id", getExperienceId);
  
  //update specific user 'experience' by id from mongodb server
  router.put("/experience/update/:id", updateExperience);
  
  //delete specific user "experience" by id from mongodb server
  router.delete("/experience/:id", deleteExperience);
  
  module.exports = router;
  