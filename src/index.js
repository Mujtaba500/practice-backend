import app from "./app.js";
import "dotenv/config";
import connectDb from "./db/config.js";
import upload from "./middleware/multer.js";
import { uploadOnCloudinary } from "./utils/cloudinary.js";

// app.post("/upload", upload.single("meme"), async (req, res) => {
//   // uploadOnCloudinary("./public/temp");
//   try {
//     // Upload image to Cloudinary
//     console.log(req.file);
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       resource_type: "auto",
//     });
//     console.log(result.url);
//     // Send the Cloudinary URL in the response
//     res.json({ imageUrl: result.secure_url });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error uploading image to Cloudinary" });
//   }
// });

app.post("/upload", upload.single("meme"), async (req, res) => {
  const response = uploadOnCloudinary(req.file.path);
  res.json({
    url: response.secure_url,
  });
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
