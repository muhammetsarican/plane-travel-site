const { default: mongoose } = require("mongoose");
const UserFlightService = require("../services/UserFlightService")

class UserFlightController {
    create() {
        return (req, res, next) => {
            UserFlightService.create({
                reserved_flight_id: req.params.flight_id,
                user_id: req.body?.user_id || new mongoose.Types.ObjectId()
            })
                .then(response => {
                    res.status(200).send({
                        success: true,
                        message: response
                    })
                })
        }
    }

    deleteOne() {
        return (req, res, next) => {
            UserFlightService.deleteOne(req.body)
                .then(response => {
                    res.status(200).send({
                        success: false,
                        message: response
                    })
                })
        }
    }
}

module.exports = new UserFlightController();