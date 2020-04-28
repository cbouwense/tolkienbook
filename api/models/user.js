const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  birthyear: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  enemies: [
    mongoose.Schema.Types.ObjectId
  ],
  allies: [
    mongoose.Schema.Types.ObjectId
  ]
})

module.exports = mongoose.model("users", userSchema);