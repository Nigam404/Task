const axios = require("axios");
const User = require("../models/user-model");

exports.addUser = async (req, res) => {
  try {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    users.data.forEach((user) => {
      User.create(user);
    });
    console.log("Users added in DB successfully!!!");
    res
      .status(201)
      .json({ message: "Users fetched and added to DB successfully!!!" });
  } catch (error) {
    console.log(error);
  }
};
