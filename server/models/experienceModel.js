const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  experience: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("experience", experienceSchema);
