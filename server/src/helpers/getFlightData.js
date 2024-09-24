const axios = require("axios");

async function getFlights() {
    return await axios.get("https://api.schiphol.nl/public-flights/flights", {
        headers: {
            "resourceversion": "v4",
            "app_id": `${process.env.DB_APP_ID}`,
            "app_key": `${process.env.DB_APP_KEY}`
        }
    })
}

module.exports = getFlights;