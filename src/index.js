import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "response rec",
  });
});

app.get("/animals", (req, res) => {
  res.send("<h1>LIONS</h1>");
});

app.listen(process.env.port, () => {
  console.log("Server started");
});
