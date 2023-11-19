import { TweetService } from "../services/index.js";
var tweetService = new TweetService();
async function createTweet(req, res) {
  try {
    const response = await tweetService.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a Tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    // return res.status(500).json({
    //   success: false,
    //   message: "Something went wrong in controller layer",
    //   data: {},
    //   err: error,
    // });
    console.log(error);
  }
}

export default createTweet;
