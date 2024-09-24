const express = require("express");
const cors = require("cors");
const getFlights = require("./helpers/getFlightData");
const config = require("./config/index.js");
const database = require("./database/index.js");
const FlightService = require("./Services/FlightService.js");

config();
database();

const app = express();

app.use(express.json());

const corsOptions = {
    origin: [`http://${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}`],
    credentials: true
}
app.use(cors(corsOptions));

app.get("/", async (req, res) => {
    const flightData = await getFlights();
    FlightService.insertMany(flightData.data.flights);

    res.status(200).send({
        success: true,
        message: flightData.data
    })
})

module.exports = app;