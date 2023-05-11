const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  experience: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("experience", experienceSchema);
