const { default: mongoose } = require("mongoose");
const UserFlightService = require("../services/UserFlightService")

class UserFlightController {
    findAll() {
        return (req, res, next) => {
            UserFlightService.findAll()
                .then(response => {
                    res.status(200).send({
                        success: true,
                        message: response
                    })
                })
        }
    }

    create() {
        return (req, res, next) => {
            const data = {
                reserved_flight_id: req.params.flight_id,
                user_id: req.body?.user_id || new mongoose.Types.ObjectId(),
                price: req.body.price
            };

            UserFlightService.create(data)
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