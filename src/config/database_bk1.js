// const mongoose = require("mongoose");
import mongoose from "mongoose";
export const connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/twitter_dev");
  console.log("DATABASE CONNECTED SUCESSFULLY");
};

// module.exports = connect;
