const aboutSchema = require("../models/aboutModel.js");

//get all 'about' data from mongodb server
exports.getAbout = async (req, res) => {
  const about = await aboutSchema.find();
  try {
    res.json(about);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

//add 'about' user  details to mongodb server
exports.addAbout = async (req, res) => {
  try {
    const newAbout = new aboutSchema({
      about: req.body.about,
    });
    await newAbout.save();
    res.json({msg: "About added successfully"});
  } catch (error) {
    res.status(500).json({ msg: "Server Problem" });
  }
};

//get specific 'about'  user  details by id from mongodb server
exports.getAboutId = async (req, res) => {
  try {
    const about = await aboutSchema.findById(req.params.id);
    res.json(about);
  } catch (error) {
    res.status(500).json({ msg: "Server Problem" });
  }
};

//update specific 'about' user by id from mongodb server
exports.updateAbout = async (req, res) => {
  try {
    const newAbout = await aboutSchema.findByIdAndUpdate(req.params.id, {
      about: req.body.about,
    });

    let results = await newAbout.save();
    await results;
    res.json({ msg: "Item updated" });
  } catch (error) {
    res.status(500).json({ msg: "Error updating" });
  }
};

//delete specific 'about' user by id from mongodb server
exports.deleteAbout = async (req, res) => {
  const about = await aboutSchema.findByIdAndDelete(req.params.id);
  about: req.params.id;
  res.json({ msg: "Item deleted" });
};
