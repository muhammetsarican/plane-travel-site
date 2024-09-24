const express = require("express");
const UserFlightController = require("../controllers/UserFlightController");

const UserFlightRouter = express.Router();

UserFlightRouter.route("/").get(UserFlightController.findAll());
UserFlightRouter.route("/make-reservation/:flight_id").post(UserFlightController.create());
UserFlightRouter.route("/delete-reservation/:flight_id").delete(UserFlightController.deleteOne());

module.exports = UserFlightRouter;