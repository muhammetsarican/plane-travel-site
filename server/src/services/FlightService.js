const FlightModel = require("../models/FlightModel");

class FlightService {
    findAll() {
        return FlightModel.find({});
    }

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