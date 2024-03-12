const cron = require("node-cron");
const axios = require("axios");
const Post = require("../models/post-model");
const Comment = require("../models/comment-model");

module.exports = cron.schedule("*/10 * * * * *", async () => {
  console.log("scheduler called at " + new Date());
  //Scheduling fetching post every 10 sec..........................
  //fetching post from api...
  const postFromApi = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  //check if the post exist in db or not...
  postFromApi.data.forEach(async (post) => {
    const result = await Post.find({ id: post.id });
    //if not present, inserting in db.
    if (!result) {
      await Post.create(post);
      console.log("post data inserted");
    }
  });
  //Scheduling fetching comment every 10 sec..........................
  //fetching comment from api...
  const commentFromApi = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  //check if the post exist in db or not...
  commentFromApi.data.forEach(async (comment) => {
    const result = await Comment.find({ id: comment.id });
    //if not present, inserting in db.
    if (!result) {
      await Comment.create(comment);
      console.log("comment data inserted");
    }
  });
});
