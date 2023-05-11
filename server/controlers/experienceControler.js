const experienceSchema = require("../models/experienceModel.js");

//get all 'experience' data from mongodb server
exports.getExperience = async (req, res) => {
  const experience = await experienceSchema.find();
  try {
    res.json(experience);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

//add 'experience' user  details to mongodb server
exports.addExperience = async (req, res) => {
  try {
    const newExperience = new experienceSchema({
        experience: req.body.experience,
    });
    await newExperience.save();
    res.json({msg: "Experience added successfully"});
  } catch (error) {
    res.status(500).json({ msg: "Server Problem" });
  }
};

//get specific 'experience'  user  details by id from mongodb server
exports.getExperienceId = async (req, res) => {
  try {
    const experience = await experienceSchema.findById(req.params.id);
    res.json(experience);
  } catch (error) {
    res.status(500).json({ msg: "Server Problem" });
  }
};

//update specific 'experience' user by id from mongodb server
exports.updateExperience = async (req, res) => {
  try {
    const newExperience = await experienceSchema.findByIdAndUpdate(
      req.params.id,
      {
        experience: req.body.experience,
      }
    );

    let results = await newExperience.save();
    await results;
    res.json({ msg: "Item updated" });
  } catch (error) {
    res.status(500).json({ msg: "Error updating" });
  }
};

//delete specific 'experience' user by id from mongodb server
exports.deleteExperience = async (req, res) => {
  const experience = await experienceSchema.findByIdAndDelete(req.params.id);
  experience: req.params.id;
  res.json({ msg: "Item deleted" });
};
