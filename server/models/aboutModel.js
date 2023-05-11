const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  about: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("about", aboutSchema);
