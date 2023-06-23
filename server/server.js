require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const path = require("path");

//initialize
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//------------------connect to mongodb-----------------



mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("mongodb connected..."));


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


// static assets for deployment purposes (heroku)
if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/buid"));
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")));
}



// Serve static assets if in production
if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
  app.get('*', (req, res)=>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}


app.listen(port, () => {
  console.log(`listening on port:${port}`);
});
