const express = require("express");
const router = express.Router();

const postController = require("../controllers/post-controller");

router.get("/", postController.addPosts);
router.get("/search/:searchText/:searchType", postController.findPost);

module.exports = router;
