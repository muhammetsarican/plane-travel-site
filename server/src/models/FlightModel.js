const { default: mongoose } = require("mongoose");

const FlightSchema = new mongoose.Schema({
    lastUpdatedAt: Date,
    actualLandingTime: Date,
    aircraftType: Object,
    baggageClaim: Object,
    codeshares: Object,
    estimatedLandingTime: Date,
    expectedTimeOnBelt: Date,
    flightDirection: String,
    flightName: String,
    flightNumber: Number,
    id: String,
    isOperationalFlight: Boolean,
    mainFlight: String,
    prefixIATA: String,
    prefixICAO: String,
    airlineCode: Number,
    publicFlightState: Object,
    route: Object,
    scheduleDateTime: Date,
    scheduleDate: Date,
    scheduleTime: String,
    serviceType: String,
    terminal: Number,
    schemaVersion: String,
    isReserved: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("flight", FlightSchema);

// {
// 	"lastUpdatedAt": "2024-09-23T02:51:10.148+02:00",
// 	"actualLandingTime": "2024-09-23T00:57:31.000+02:00",
// 	"aircraftType": {
// 		"iataMain": "737",
// 		"iataSub": "73H"
// 	},
// 	"baggageClaim": {
// 		"belts": [
// 			"4"
// 		]
// 	},
// 	"codeshares": {
// 		"codeshares": [
// 			"KL2745"
// 		]
// 	},
// 	"estimatedLandingTime": "2024-09-23T00:57:54.000+02:00",
// 	"expectedTimeOnBelt": "2024-09-23T01:44:57.000+02:00",
// 	"flightDirection": "A",
// 	"flightName": "HV6886",
// 	"flightNumber": 6886,
// 	"id": "140709928119483240",
// 	"isOperationalFlight": true,
// 	"mainFlight": "HV6886",
// 	"prefixIATA": "HV",
// 	"prefixICAO": "TRA",
// 	"airlineCode": 164,
// 	"publicFlightState": {
// 		"flightStates": [
// 			"ARR",
// 			"EXP"
// 		]
// 	},
// 	"route": {
// 		"destinations": [
// 			"KEF"
// 		],
// 		"eu": "S",
// 		"visa": false
// 	},
// 	"scheduleDateTime": "2024-09-23T01:15:00.000+02:00",
// 	"scheduleDate": "2024-09-23",
// 	"scheduleTime": "01:15:00",
// 	"serviceType": "J",
// 	"terminal": 1,
// 	"schemaVersion": "4"
// }