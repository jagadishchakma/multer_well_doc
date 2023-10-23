const express = require("express");
const home_controller = require("../controller/home_controller");
const single_home_controller = require("../controller/single_home_controller");
const home_router = express.Router();

home_router.get("/", home_controller);
home_router.get("/single", single_home_controller);

module.exports = home_router;