const FlightModel = require("../models/FlightModel");

class FlightService {
    insertMany(data) {
        return FlightModel.insertMany(data, { rawResult: true })
    }

    updateOne(id, data) {
        return FlightModel.updateOne(id, data);
    }

    deleteMany() {
        return FlightModel.deleteMany({});
    }
}

module.exports = new FlightService();