import AlitaliaLogo from "../../../../assets/logos/flights/alitalia-logo.png";

export default (flight: any) => {
    const scheduledTime = new Date(flight.scheduleDateTime);
    const landingTime = new Date(flight.estimatedLandingTime);

    console.log((landingTime.getTime() - scheduledTime.getTime()) / 86400)
    return (
        <div id="flight-item">
            <div className="bg-primary-white rounded-lg rounded-es-none h-fit">
                {(() => {
                    console.log(flight)
                    return <p></p>
                })()}
                <div id="flight-title" className="text-sm font-bold p-3">Milano - Madrid</div>
                <div id="flight-direction" className="flex justify-between items-center p-5">
                    <div id="source-detail">
                        <div id="source-title" className="flex gap-1 items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-plane-takeoff stroke-slate-600 w-4 h-4">
                                    <path d="M2 22h20" />
                                    <path
                                        d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
                                </svg>
                            </span>
                            <p className="text-slate-500 text-xs font-semibold">Departure</p>
                        </div>
                        <div id="time" className="font-semibold">{scheduledTime.toLocaleTimeString()}</div>
                        <div id="source-place" className="text-slate-500 text-xs font-semibold">Airport:
                            {flight.publicFlightState?.flightStates[0]}
                        </div>
                    </div>
                    <div id="divider" className="border-2 border-gray-300 w-1/6 h-fit"></div>
                    <div id="comp-detail" className="flex flex-col items-center gap-1">
                        <div id="comp-logo">
                            <img className="h-3" src={AlitaliaLogo} alt=""></img>
                        </div>
                        <div id="plane-icon"><span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-plane w-5 h-5 fill-primary-purple rotate-45">
                                <path
                                    d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                            </svg>
                        </span></div>
                        <div id="flight-duration" className="text-xs font-semibold text-slate-500">2h
                            25m
                            (Nonstop)</div>
                    </div>
                    <div id="divider" className="border-2 border-gray-300 w-1/6 h-fit"></div>
                    <div id="dest-detail">
                        <div id="dest-title" className="flex gap-1 items-center">
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-plane-landing stroke-slate-600 w-4 h-4">
                                <path d="M2 22h20" />
                                <path
                                    d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" />
                            </svg></span>
                            <p className="text-slate-500 text-xs font-semibold">Arrival</p>
                        </div>
                        <div id="time" className="font-semibold">{landingTime.toLocaleTimeString()}</div>
                        <div id="dest-place" className="text-slate-500 text-xs font-semibold">Airport:
                            {flight.route?.destinations[0]}
                        </div>
                    </div>
                </div>
                <div id="flight-sum" className="flex justify-between">
                    <div id="flight-price" className="p-5">
                        <p className="text-primary-purple font-bold text-sm">Price: $234</p>
                        <p className="text-slate-500 font-semibold text-xs">Round Trip</p>
                    </div>
                    <div id="book-button" className="mt-auto">
                        <button
                            className="bg-primary-purple text-primary-white px-6 py-4 rounded-ss-lg rounded-ee-lg text-sm font-bold capitalize">book
                            flight</button>
                    </div>
                </div>
            </div>
            <div
                className="bg-primary-purple/20 p-3 text-primary-purple text-xs w-fit rounded-es-lg rounded-ee-lg">
                <u>Check the details</u>
            </div>
        </div>
    )
}