import { useNavigate } from "react-router-dom";
import DeltaAirLogo from "../../../../assets/logos/flights-page/delta-airlines.png";
import FlightOption from "./flight-option";

export default (flight: any) => {
    const scheduledTime = new Date(flight.scheduleDateTime);
    const landingTime = new Date(flight.estimatedLandingTime);

    const flightOptions = [{
        name: "main", price: "$156",
    }, {
        name: "comfort+", price: "$204",
    }, {
        name: "business", price: "$249",
    }, {
        name: "deltaone", price: "$386",
    }, {
        name: "luxury", price: "$422",
    }]

    const navigate = useNavigate();

    return (
        <div id="flight-item" className="bg-white grid grid-cols-2 shadow-lg" onClick={() => {
            navigate(`/flight-detail/${flight._id}`)
        }}>
            <div id="left-side" className="flex items-start p-3">
                <div id="logo" className="border-2 w-8 h-8 rounded-full m-3">
                    <img className="w-8" src={DeltaAirLogo} alt=""></img>
                </div>
                <div id="flight-info">
                    <p id="flight-time" className="text-2xl font-medium p-3">{scheduledTime.toLocaleTimeString()} - {landingTime.toLocaleTimeString()}</p>
                    <div id="flight-details" className="grid grid-cols-3 gap-10 p-3">
                        <div id="airline">
                            <p className="capitalize text-sm font-semibold">delta air lines</p>
                            <select className="capitalize text-blue-500 bg-transparent text-xs font-medium">
                                <option value="detail">flight details</option>
                            </select>
                        </div>
                        <div id="type">
                            <p className="capitalize text-sm font-semibold">nonstop</p>
                            <p className="text-slate-400 text-xs font-medium">1h 32m</p>
                        </div>
                        <div id="direction">
                            <p className=" text-sm font-semibold">{flight.publicFlightState?.flightStates[0]} to {flight.route?.destinations[0]}</p>
                            <p className="text-slate-400 text-xs font-medium">{flight.prefixIATA} {flight.flightNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="right-side" className="flex justify-end items-center p-5">
                <div id="flight-category-buttons" className="grid grid-cols-5 gap-3">
                    {flightOptions.map((option, index) => (
                        <FlightOption {...option} key={index} />
                    ))}
                    <p className="text-[0.6rem] text-blue-500 font-semibold">1 more option</p>
                </div>
            </div>
        </div>
    )
}