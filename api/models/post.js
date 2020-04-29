const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("posts", postSchema);