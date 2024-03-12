const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Post = new schema({
  userId: Number,
  id: Number,
  title: String,
  body: String,
});

module.exports = mongoose.model("Post", Post);
