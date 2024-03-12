const axios = require("axios");

const Comment = require("../models/comment-model");

exports.addComment = async (req, res) => {
  try {
    const comments = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    comments.data.forEach((comment) => {
      Comment.create(comment);
    });

    console.log("Comments added in DB successfully!!!");
    res.status(201).json({ message: "Comments fetched and added to DB successfully!!!" });
  } catch (error) {
    console.log(error);
  }
};
