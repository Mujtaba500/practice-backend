import express from "express";
import "dotenv/config";
import connectDb from "./db/config.js";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "response 2nd",
  });
});

app.get("/animals", (req, res) => {
  res.send("<h1>zebra</h1>");
});

connectDb().then(() => {
  console.log("DB connected");
});

app.listen(process.env.port, () => {
  console.log("Server started");
});
