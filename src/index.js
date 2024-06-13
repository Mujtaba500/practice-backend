import app from "./app.js";
import "dotenv/config";
import connectDb from "./db/config.js";

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

connectDb()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("MONGODB Connection failed", err);
  });

app.listen(process.env.port || 3002, () => {
  console.log("Server started");
});
