const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  education: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("education", educationSchema);
