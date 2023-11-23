import { TweetService } from "../services/index.js";
var tweetService = new TweetService();
export async function createTweet(req, res) {
  try {
    const response = await tweetService.create(req.body);
    return res.status(200).json({
      success: true,
      message: "Successfully created a Tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong in controller layer",
      data: {},
      err: error,
    });
  }
}

export async function getTweet(req, res) {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully fetching a Tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong in controller layer",
      data: {},
      err: error,
    });
  }
}
