const UserFlightModel = require("../models/UserFlightModel");

class UserFlightService {
    create(data) {
        return UserFlightModel(data).create;
    }

    deleteOne(data) {
        return UserFlightModel.deleteOne(data);
    }
};

module.exports = new UserFlightService();