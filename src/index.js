import express from "express";
import "dotenv/config";
import connectDb from "./db/config.js";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "response 2nd",
  });
});

app.get("/api/animals", (req, res) => {
  try {
    const animals = [
      {
        id: 1,
        name: "Zebra",
        specie: "mammal",
      },
      {
        id: 2,
        name: "Lion",
        specie: "mammal",
      },
      {
        id: 3,
        name: "crocodile",
        specie: "reptile",
      },
    ];
    res.json({
      animals,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

connectDb().then(() => {
  console.log("DB connected");
});

app.listen(process.env.port, () => {
  console.log("Server started");
});
