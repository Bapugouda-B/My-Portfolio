const router = require("express").Router();
const projectSchema = require("../models/projectModel.js");

//...........project routes.............

//1st way -> get all 'project' data from mongodb server
router.get("/project", async (req, res) => {
  try {
    const project = await projectSchema.find();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});

//add user 'project' details to mongodb server
router.post("/project", async (req, res) => {
  const { product_id, title,  description, images } = req.body
  try {
    const project = new projectSchema({
      product_id,
      title,
      description,
      images,
    });

    await project.save();
    res.json({ msg: "project added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get specific user 'project' details by id from mongodb server
router.get("/project/:id", async (req, res) => {
  try {
    let project = await projectSchema.findById(req.params.id);
    res.json(project);
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
});

//update specific user 'project' by id from mongodb server
router.put("/project/update/:id", async (req, res) => {
  const { product_id, title,  description, images } = req.body;
  try {
    const project = await projectSchema.findByIdAndUpdate(req.params.id, {
      product_id,
      title,
      description,
      images,
    });
    await project.save();
    res.json({ msg: "Item updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete specific user "project" by id from mongodb server
router.delete("/project/:id", async (req, res) => {
  let project = await projectSchema.findByIdAndDelete(req.params.id);
  try {
    await project;
    res.json({ msg: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
