const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Comment = new schema({
  postId: {
    type: Number,
    required: true,
  },
  id: Number,
  name: String,
  email: String,
  body: String,
});

module.exports = mongoose.model("Comment", Comment);
