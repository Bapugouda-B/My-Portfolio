require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

//initialize express
const app = express(); 

//middleware
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Serve static files from the client/build directory
app.use(express.static(path.join(__dirname, "../client/build")));

//------------------connect to mongodb-----------------
console.log("MONGODB URI:", process.env.MONGODB);
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
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
  console.log(`listening on port:${port}`);
});
