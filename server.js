const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const product = require("./routes/product.route");
// initialize our express app
const app = express();

// linking db
let localDB_URI = "mongodb://127.0.0.1:27017/family";
let mongoDB = process.env.MONGODB_URI || localDB_URI;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use("/products", product);

const PORT = 5500;
app.listen(PORT, () => {
  console.log("Server is up and running on port numner " + PORT);
});
