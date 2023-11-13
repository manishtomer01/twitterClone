import express from "express";
import { connect } from "./config/database.js";
import { TweetService } from "./services/index.js";
const app = express();

app.listen(3000, async () => {
  await connect();
  console.log("mongodb connected");
  let service = new TweetService();
  await service.create({ content: "Done with #module ?" });
});
