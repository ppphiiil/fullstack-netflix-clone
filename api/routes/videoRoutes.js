const express = require("express");
const { getVideo } = require("../controllers/videoControllers");

const Route = express.Router();

for (let i = 1; i <= 20; i++) {
  Route.get(`/${i}`, getVideo(`episode${i}`));
}

module.exports = Route;
