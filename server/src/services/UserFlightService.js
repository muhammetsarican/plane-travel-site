const UserFlightModel = require("../models/UserFlightModel");

class UserFlightService {
    findAll() {
        return UserFlightModel.find({});
    }

    create(data) {
        return UserFlightModel(data).save();
    }

    deleteOne(data) {
        return UserFlightModel.deleteOne(data);
    }
};

module.exports = new UserFlightService();