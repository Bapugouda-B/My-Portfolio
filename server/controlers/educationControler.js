const educationSchema = require("../models/educationModel.js");

//get all 'education' data from mongodb server
exports.getEducation = async (req, res) => {
  const education = await educationSchema.find();
  try {
    res.json(education);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

//add 'education' user  details to mongodb server
exports.addEducation = async (req, res) => {
  try {
    const newEducation = new educationSchema({
      education: req.body.education,
    });
    await newEducation.save();
    res.json({msg: "Education added successfully"});
  } catch (error) {
    res.status(500).json({ msg: "Server Problem" });
  }
};

//get specific 'education'  user  details by id from mongodb server
exports.getEducationId = async (req, res) => {
  try {
    const education = await educationSchema.findById(req.params.id);
    res.json(education);
  } catch (error) {
    res.status(500).json({ msg: "Server Problem" });
  }
};

//update specific 'education' user by id from mongodb server
exports.updateEducation = async (req, res) => {
  try {
    const newEducation = await educationSchema.findByIdAndUpdate(
      req.params.id,
      {
        education: req.body.education,
      }
    );

    let results = await newEducation.save();
    await results;
    res.json({ msg: "Item updated" });
  } catch (error) {
    res.status(500).json({ msg: "Error updating" });
  }
};

//delete specific 'education' user by id from mongodb server
exports.deleteEducation = async (req, res) => {
  const education = await educationSchema.findByIdAndDelete(req.params.id);
  education: req.params.id;
  res.json({ msg: "Item deleted" });
};
