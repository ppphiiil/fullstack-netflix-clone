const express = require("express");
require("./mongoConnect");
// require("./connect");
const cors = require("cors");

const seriesRoute = require("./routes/seriesRoutes");
const rowRoute = require("./routes/rowRoutes");

const port = 3000;

const app = express();

app.use(express.json());

app.use(cors());

app.use("/series", seriesRoute);
app.use("/series/row", rowRoute);

app.listen(port, () => console.log("server running on port: ", port));
