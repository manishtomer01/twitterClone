const express = require("express");
const connect = require("./config/database_bk1");
const app = express();

// const { HashtagRepository, TweetRepository } = require("./repository");
// const { TweetService } = require("./services");

// const Comment = require("./models/comments");

app.listen(1221, async () => {
  console.log("Server running at http://localhost:3000/");
  await connect();
  // const tweetRepo = new TweetRepository();
  // var tweets = await tweetRepo.getAllTweets()
  // var updatedTweet =await tweetRepo.update("6548b5cc16ca432ca1935b05",{content:"Fourht Time"})

  // var tweet = await tweetRepo.create({
  //   content: "NEW TWEET with Hook 9",
  //   userEmail: "tweet9@gmail.com",
  // });
  // console.log("tweet :>> ", tweet);
  // var comment = await Comment.create({
  //   content: "New Comment 9",
  //   userEmail: "demo9@mail.com",
  // });
  // tweet.comments.push(comment);
  // await tweet.save();
  // console.log(tweet);
  // const data = await tweetRepo.getWithComments("654de313b041034b69130ce9");

  // const data = await tweetRepo.getAll(6, 3);
  // console.log(data[0].contentWithEmail);

  // const TweetService = require("./services/tweet_service");
  // const tweetService = new TweetService();
  // const tweet = await tweetService.create({ content: "#the raman #busy today" });

  // let hashtagRepository = new HashtagRepository();
  //   await hashtagRepository.bulkCreate([
  //     {
  //       title: "Trend",
  //       tweet: [],
  //     },
  //     {
  //       title: "Exicted",
  //       tweet: [],
  //     },
  //     {
  //       title: "Python",
  //       tweet: [],
  //     },
  //     {
  //       title: "Fuun",
  //       tweet: [],
  //     },
  //     {
  //       title: "Carrer",
  //       tweet: [],
  //     },
  //   ]);

  // const response = await hashtagRepository
  //   .findByName(["Python", "Fuun", "Carrer"]);
  // console.log("response >>>", response);

  // const service = new TweetService();
  // let tweet = await service.create({
  //   content: "is #tweet working ?",
  // });
  // console.log(tweet);

  

  // const userRepo = new UserRepository();
  // const tweetRepo = new TweetRepository();
  // const tweets = await tweetRepo.getAll(0, 10);
  // const users = await userRepo.getAll();
  // const likeService = new LikeService();
  // await likeService.toggleLike(tweets[0].id, "Tweet", users[0].id);

});
