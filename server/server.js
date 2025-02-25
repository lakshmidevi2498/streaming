import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import videoRoute from './routes/videoRoute.js'
import contentRoute from './routes/contentRoute.js'
dotenv.config()

const app = express();
const folderName = 'streaming'
const folderNameTwo = 'couses'
app.use(express.json()); 

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true,
}));

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

app.use(express.static(path.join(__dirname, '../client/build')));

// console.log("__dirname",__dirname)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB is connected successfully");
      // createDefaultAdmin();
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });

cloudinary.config({ 
  cloud_name: 'dh8pcfn4m', 
  api_key: '773144582926555', 
  api_secret: 'ucClq6uuyWuFmm22abYvl7nOv_8' 
});

app.get("/videoo", function (req, res) {
  const range = req.headers.range;
  console.log("Range header:", range);

  if (!range) {
    return res.status(416).send("Range header is required");
  }

  const videoPath = path.join(__dirname, "video", "adobe.mp4");
  const videoSize = fs.statSync(videoPath).size;
  console.log("videoSize",videoSize)

  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));  
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);   

  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  res.writeHead(206, headers);

  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);
});



app.post('/upload', async (req, res) => {
  try {
      console.log("req.body", req.body);
      const { video, public_id } = req.body; 
      const uploadResult = await cloudinary.uploader.upload(video, {
          resource_type: 'video',
          public_id: public_id,
          folder: folderName, 
      });

      console.log("uploadResult", uploadResult); 

      const optimizeUrl = cloudinary.url(public_id, {
          resource_type: 'video',
          fetch_format: 'auto',
          quality: 'auto'
      });

      console.log("optimizeUrl", optimizeUrl);

      const autoCropUrl = cloudinary.url(public_id, {
          resource_type: 'video',
          width: 500,
          height: 500,
          crop: 'fill',
          fetch_format: 'auto',
          quality: 'auto',
      });

      console.log("autoCropUrl", autoCropUrl);

      // Send response
      res.status(200).json({
          message: "Video uploaded successfully",
          uploadResult,
          optimizeUrl,
          autoCropUrl
      });

  } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ message: "Internal server error", error: error.message });
  }
});
app.post('/upload-courses', async (req, res) => {
  try {
      console.log("req.body", req.body);
      const { video, public_id } = req.body; 
      const uploadResult = await cloudinary.uploader.upload(video, {
          resource_type: 'video',
          public_id: public_id,
          folder: folderNameTwo, 
      });

      console.log("uploadResult", uploadResult); 

      const optimizeUrl = cloudinary.url(public_id, {
          resource_type: 'video',
          fetch_format: 'auto',
          quality: 'auto'
      });

      console.log("optimizeUrl", optimizeUrl);

      const autoCropUrl = cloudinary.url(public_id, {
          resource_type: 'video',
          width: 500,
          height: 500,
          crop: 'fill',
          fetch_format: 'auto',
          quality: 'auto',
      });

      console.log("autoCropUrl", autoCropUrl);

      // Send response
      res.status(200).json({
          message: "Video uploaded successfully",
          uploadResult,
          optimizeUrl,
          autoCropUrl
      });

  } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ message: "Internal server error", error: error.message });
  }
});




app.use('/video-data',videoRoute)
app.use('/content',contentRoute)


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
