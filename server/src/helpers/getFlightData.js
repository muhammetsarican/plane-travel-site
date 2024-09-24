const axios = require("axios");

async function getFlights() {
    return await axios.get("https://api.schiphol.nl/public-flights/flights", {
        headers: {
            "resourceversion": "v4",
            "app_id": "b0a43eba",
            "app_key": "96cc7869f29f157767a4262a6488553c"
        }
    })
}

module.exports = getFlights;