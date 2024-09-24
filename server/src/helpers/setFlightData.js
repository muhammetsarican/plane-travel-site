const getFlights = require("./getFlightData");
const FlightService = require("../services/FlightService");

module.exports = async () => {
    const flightData = await getFlights();
    FlightService.insertMany(flightData.data.flights);
    console.log("Flight data inserted from Schiphol API to local database!")
}