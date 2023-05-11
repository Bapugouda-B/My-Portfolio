require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");

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

const uri = process.env.MONGODB;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("mongodb connected..."));

//----------------------routes------------------------
app.use("/contact", require("./routes/contactRoute.js"));
app.use("/user", require("./routes/userRoute.js"));
app.use("/", require("./routes/educationRoute.js"));
app.use("/", require("./routes/aboutRoute.js"));
app.use("/", require("./routes/experienceRoute.js"));
app.use("/", require("./routes/projectRoute.js"));
app.use("/", require("./routes/uploadRoute.js"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on port:${port}`);
});
