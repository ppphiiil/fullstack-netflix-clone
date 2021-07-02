const express = require("express");
require("./mongoConnect");
const cors = require("cors");

const popularRoute = require("./routes/popularRoutes");

const port = 3500;

const app = express();

app.use(express.json());

app.use(cors());

app.use("/popular", popularRoute);

app.listen(port, () => console.log("server running on port: ", port));
