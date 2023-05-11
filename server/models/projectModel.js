const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  project_id: {
    type: String,
    unique: true,
    require: true,
  },
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    require: true,
  },
  images: {
    type: Object,
    require: true,
  },
});

module.exports = mongoose.model("projects", projectSchema);
