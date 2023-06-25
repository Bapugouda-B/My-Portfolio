require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

// Initialize express
const app = express(); 

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Serve static files from the client/build directory
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

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

//--------------------Start Server----------------------

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
