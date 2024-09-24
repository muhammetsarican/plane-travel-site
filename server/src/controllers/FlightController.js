const FlightService = require("../services/FlightService")

class FlightController {
    findAll() {
        return (req, res, next) => {
            FlightService.findAll()
                .then(response => {
                    res.status(200).send({
                        success: true,
                        message: response
                    })
                })
        }
    }

    updateOne() {
        return (req, res, next) => {
            FlightService.updateOne({
                _id: req.params.id
            }, req.body)
                .then(response => {
                    res.status(200).send({
                        success: false,
                        message: response
                    })
                })
        }
    }
}

module.exports = new FlightController();