const express = require("express");
const FlightController = require("../controllers/FlightController");

const FlightRouter = express.Router();

FlightRouter.route("/").get(FlightController.findAll());

module.exports = FlightRouter;