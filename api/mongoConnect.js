const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.URI, {
  dbName: process.env.DB,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("open", () => console.log("connected to mongoDB"));

mongoose.connection.on("error", (err) => console.log(err.message));

mongoose.connection.on("disconnected", () =>
  console.log("database disconnected")
);

// process.on("SIGINT", () => {
//   mongoose.connection.close();
//   process.exit();
// });
