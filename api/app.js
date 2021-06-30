const express = require("express");

const port = 3500;

const app = express();

app.use(express.json());

app.listen(port, () => console.log("server running on port: ", port));
