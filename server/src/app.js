const express = require("express");
const cors = require("cors");
const config = require("./config/index.js");
const database = require("./database/index.js");
const FlightRouter = require("./routes/FlightRoute.js");
const setFlightData = require("./helpers/setFlightData.js");
const UserFlightRouter = require("./routes/UserFlightRoute.js");

config();
database();
setFlightData();

const app = express();

app.use(express.json());

const corsOptions = {
    origin: [`http://${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}`],
    credentials: true
}
app.use(cors(corsOptions));

app.get("/", async (req, res) => {
    res.status(200).send({
        success: true,
        message: "Welcome to server!"
    })
})

app.use("/flight", FlightRouter);
app.use("/user-flight", UserFlightRouter);

module.exports = app;