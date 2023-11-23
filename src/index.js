import express from "express";
import { connect } from "./config/database.js";
import apiRoutes from "./routes/index.js";

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
app.listen(3000, async () => {
  await connect();
  console.log("server start running at http://localhost:3000/api/v1/");
});
