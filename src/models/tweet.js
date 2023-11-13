// const mongoose = require("mongoose");
import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
      max: [250, "tweets can't be more then 250 characters"],
    },
    // userEmail: {
    //   type: String,
    //   require: true,
    // },
    // comments: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Comment",
    //   },
    // ],
    hashtags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hashtag",
      },
    ],
  },
  { timestamps: true }
);

// tweetSchema.virtual("contentWithEmail").get(function process() {
//   return `${this.content} \nCreated by: ${this.userEmail}`;
// });

// tweetSchema.pre("save", function (next) {
//   console.log("inside a hook");
//   this.content = this.content + ".....";
//   next();
// });

const Tweet = mongoose.model("Tweet", tweetSchema);
// module.exports = Tweet;
export default Tweet;
