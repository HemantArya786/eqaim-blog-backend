const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  title: {
    type: String,
    min: 3,
    max: 250,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("blog", blogSchema);
