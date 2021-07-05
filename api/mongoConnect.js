const mongoose = require("mongoose");
require("dotenv").config();

// compass conection
///////////////////////
// mongoose.connect(process.env.URI, {
//   dbName: process.env.DB,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// atlas connection
///////////////////////
mongoose.connect(
  "mongodb+srv://cluster0.pvdjv.mongodb.net/?retryWrites=true&w=majority",
  {
    dbName: "netflix-clone",
    user: "user123",
    pass: "user123",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

mongoose.connection.on("open", () => console.log("connected to mongoDB"));

mongoose.connection.on("error", (err) => console.log(err.message));

mongoose.connection.on("disconnected", () =>
  console.log("database disconnected")
);

// process.on("SIGINT", () => {
//   mongoose.connection.close();
//   process.exit();
// });
