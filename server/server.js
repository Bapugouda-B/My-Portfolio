const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

// Initialize express
const app = express(); 

// Middleware
app.use(cors({
  // Update with the appropriate front-end URL
  origin: ["https://bapu-portfolio.onrender.com", "https://localhost:3000"]
}));

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//------------------connect to MongoDB-----------------
const url = "mongodb+srv://bapu:uQiERWAweDHDI1Lj@portfolio.t7njl0t.mongodb.net/my-portfolio?retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
})
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log(err));

//----------------------routes------------------------
app.use("/email", require("./routes/contactRoute.js"));
app.use("/user", require("./routes/userRoute.js"));
app.use("/", require("./routes/educationRoute.js"));
app.use("/", require("./routes/aboutRoute.js"));
app.use("/", require("./routes/experienceRoute.js"));
app.use("/", require("./routes/projectRoute.js"));
app.use("/", require("./routes/uploadRoute.js"));

//--------------------Error Handling--------------------

// Define a middleware function for handling errors
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes

  // Send an appropriate response to the client
  res.status(500).json({
    error: "Internal Server Error",
  });
});

//--------------------CORS Handling--------------------
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


//--------------------Start Server----------------------

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
