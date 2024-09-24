const FlightService = require("../Services/FlightService")

class FlightController {
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