const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const path = require("path");

const postRouter = require("./routes/post-route");
const userRouter = require("./routes/user-route");
const commentRouter = require("./routes/comment-route");
const cronScheduler = require("./middlewares/scheduler");

//app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);
app.use((req, res, next) => {
  console.log("req url", req.url);
  console.log("full url", path.join(__dirname, `public/${req.url}`));
  res.sendFile(path.join(__dirname, `public/${req.url}`));
});

//server
mongoose
  .connect(process.env.MONGO_ATLAS_CONNECTION_STRING)
  .then(() => {
    console.log("DB connected.");
    app.listen(process.env.PORT, () => {
      console.log("App is listening...");
    });
  })
  .catch((err) => console.log(err));
