const axios = require("axios");
const Post = require("../models/post-model");
const Comment = require("../models/comment-model");

//..........................................................................................
exports.addPosts = async (req, res, next) => {
  try {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts.data.forEach(async (post) => {
      await Post.create(post);
    });
    console.log("Posts added in DB successfully!!!");
    res
      .status(201)
      .json({ message: "Posts fetched and added to DB successfully!!!" });
  } catch (error) {
    console.log(error);
  }
};

//..........................................................................................
exports.findPost = async (req, res, next) => {
  try {
    //getting information from request parameter
    const search_text = req.params.searchText;
    const search_type = req.params.searchType;

    let result;

    //if user is searching post by post title/body.
    if (search_type == "post") {
      const posts = await Post.find();
      console.log("Finding in posts...");
      for (let i = 0; i < posts.length; i++) {
        if (
          posts[i].title.includes(search_text) ||
          posts[i].body.includes(search_text)
        ) {
          console.log("Matching post found with id:", posts[i].id);
          result = posts[i];
          break;
        }
      }
    }

    //if user is searching post by comment name/body.
    if (search_type == "comment") {
      let commentData;
      const comments = await Comment.find();
      console.log("Finding in comments...");
      for (let i = 0; i < comments.length; i++) {
        if (
          comments[i].name.includes(search_text) ||
          comments[i].body.includes(search_text)
        ) {
          console.log("true->", comments[i].id);
          commentData = comments[i];
          break;
        }
      }
      if (commentData) {
        //getting postId associated with the comment.
        let postId = commentData.postId;
        console.log("postId->", postId);

        //getting the post using retrieved postId from comment.
        let post = await Post.findOne({ id: postId });
        result = { post: post, comment: commentData };
      }
    }

    if (result != undefined) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "Post not found" });
    }
  } catch (error) {
    console.log(error);
  }
};
