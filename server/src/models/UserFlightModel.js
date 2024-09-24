const { default: mongoose } = require("mongoose");

const UserFlightSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
    },
    reserved_flight_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    price: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("user-flight", UserFlightSchema);