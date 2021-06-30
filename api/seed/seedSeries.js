const mongoose = require("mongoose");

const Series = require("../models/seriesSchema");

mongoose.connect("mongodb://127.0.0.1:27017/netflix-clone", () =>
  console.log("connected to DB")
);
