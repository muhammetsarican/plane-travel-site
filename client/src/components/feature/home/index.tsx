
import AvatarImg from "../../../assets/images/avatar/this-person-not-exist.jpeg";
import VintageCarImg from "../../../assets/images/menu/vintage-car-under-sunset.jpg";
import BlueHotelImg from "../../../assets/images/menu/blue-hotel.jpg";
import GreenHolidayImg from "../../../assets/images/menu/green-holiday.jpg";
import FlightItem from "../home/flight-item";
import { useFlightData } from "../../../providers/FlightDataProvider";


export default () => {
    const { flightData } = useFlightData();

    return (
        // <!-- main box - start -->
        <div id="main-box" className="bg-secondary rounded-3xl">
            {/* <!-- title bar - start --> */}
            <div id="title" className="flex justify-between items-center p-3">
                {/* <!-- title box - start --> */}
                <div id="title-box" className="flex items-center gap-1">
                    <div id="logo" className="relative bg-primary-purple w-8 h-8  rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round"
                            stroke-linejoin="round"
                            className="absolute left-[-5px] lucide-plane fill-white w-8 h-8 rotate-45">
                            <path
                                d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                        </svg>
                    </div>
                    <div id="title" className="uppercase font-bold text-slate-800">plane scape</div>
                </div>
                {/* <!-- title box - end --> */}
                {/* <!-- buttons box - start --> */}
                <div id="buttons" className="flex gap-5 items-center text-sm font-medium text-slate-700">
                    <div id="page-buttons" className="flex gap-3">
                        <div id="page-button" className="flex gap-1 items-center">
                            <div id="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-tag stroke-2 stroke-white fill-primary-purple w-4 h-4">
                                    <path
                                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                                </svg>
                            </div>
                            <div id="title" className="capitalize">deals</div>
                        </div>
                        <div id="page-button" className="flex gap-1 items-center">
                            <div id="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    className="lucide lucide-earth w-4 h-4 fill-primary-purple stroke-2 stroke-primary-purple">
                                    <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                                    <path
                                        d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                                    <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                                    <circle className="fill-none" cx="12" cy="12" r="10" />
                                </svg>
                            </div>
                            <div id="title" className="capitalize">discover</div>
                        </div>
                    </div>
                    <div id="avatar-button" className="flex items-center gap-2">
                        <div id="avatar" className="rounded-full overflow-hidden">
                            <img className="w-8 h-8" src={AvatarImg} alt=""></img>
                        </div>
                        <div id="user-info" className="capitalize">joane smith</div>
                    </div>
                </div>
                {/* <!-- buttons box - end --> */}
            </div>
            {/* <!-- title bar - end --> */}
            {/* <!-- content box - start --> */}
            <div id="content-box" className="grid grid-cols-5">
                {/* <!-- left side - start --> */}
                <div id="left-side" className="col-span-4">
                    {/* <!-- booking box - start --> */}
                    <div id="booking" className="rounded-lg bg-primary-white m-5">
                        <div id="booking-title-bar" className="flex justify-between items-center p-3">
                            <div id="title" className="flex items-center gap-1 text-sm text-slate-800">
                                <div id="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-plane w-4 h-4 fill-slate-800 rotate-45">
                                        <path
                                            d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                                    </svg>
                                </div>
                                <div id="title" className="uppercase font-bold">book your flight</div>
                            </div>
                            <div id="direction-selector" className="flex items-center text-xs font-semibold">
                                <button className="bg-primary-purple text-primary-white px-3 py-2 rounded-s-full">Round
                                    trip</button>
                                <button className="bg-primary-purple/10 text-primary-purple px-3 py-2 rounded-e-full">One
                                    way</button>
                            </div>
                        </div>
                        <div id="booking-body" className="grid grid-cols-2 gap-3 p-3">
                            <div className="flex gap-1">
                                <div id="input" className="w-full relative">
                                    <span className="absolute left-2 inset-y-[20%]"><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        className="lucide lucide-plane-takeoff w-4 h-4 fill-primary-purple stroke-2 stroke-primary-purple">
                                        <path d="M2 22h20" />
                                        <path className="stroke-none"
                                            d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
                                    </svg></span>
                                    <input type="text" name="" id=""
                                        className="border-2 border-slate-200 w-full rounded-s-full px-6"></input>
                                </div>
                                <div id="input" className="w-full relative">
                                    <span className="absolute left-2 inset-y-[20%]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="lucide lucide-plane-landing w-4 h-4 fill-primary-purple stroke-2 stroke-primary-purple">
                                            <path d="M2 22h20" />
                                            <path className="stroke-none"
                                                d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" />
                                        </svg>
                                    </span>
                                    <input type="text" name="" id=""
                                        className="border-2 border-slate-200 w-full rounded-e-full px-6"></input>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div id="input" className="w-full relative">
                                    <span className="absolute left-2 inset-y-[20%]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="lucide lucide-calendar-days w-4 h-4 stroke-2 stroke-primary-purple">
                                            <path d="M8 2v4" />
                                            <path d="M16 2v4" />
                                            <rect width="18" height="18" x="3" y="4" rx="2" />
                                            <path d="M3 10h18" />
                                            <path d="M8 14h.01" />
                                            <path d="M12 14h.01" />
                                            <path d="M16 14h.01" />
                                            <path d="M8 18h.01" />
                                            <path d="M12 18h.01" />
                                            <path d="M16 18h.01" />
                                        </svg>
                                    </span>
                                    <input type="text" name="" id="" onFocus={() => "{this.type='date'}"}
                                        onBlur={() => "{this.type='text'}"}
                                        className="appearance-none border-2 border-slate-200 w-full rounded-s-full px-6"></input>
                                </div>
                                <div id="input" className="w-full relative">
                                    <span className="absolute left-2 inset-y-[20%]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="lucide lucide-calendar-days w-4 h-4 stroke-2 stroke-primary-purple">
                                            <path d="M8 2v4" />
                                            <path d="M16 2v4" />
                                            <rect width="18" height="18" x="3" y="4" rx="2" />
                                            <path d="M3 10h18" />
                                            <path d="M8 14h.01" />
                                            <path d="M12 14h.01" />
                                            <path d="M16 14h.01" />
                                            <path d="M8 18h.01" />
                                            <path d="M12 18h.01" />
                                            <path d="M16 18h.01" />
                                        </svg>
                                    </span>
                                    <input type="text" name="" id="" onFocus={() => "{this.type='date'}"}
                                        onBlur={() => "{this.type='text'}"}
                                        className="appearance-none border-2 border-slate-200 w-full rounded-e-full px-6"></input>
                                </div>
                            </div>
                        </div>
                        <div id="booking-button" className="p-3">
                            <button
                                className="rounded-md bg-primary-purple text-sm text-primary-white font-bold px-3 py-2">Show
                                flights</button>
                        </div>
                    </div>
                    {/* <!-- booking box - end --> */}
                    {/* <!-- flights - start --> */}
                    <div id="flight-container" className="grid grid-cols-3 gap-3 m-5">
                        {/* <!-- flight box - start --> */}
                        <div id="flight-box" className="col-span-2 grid grid-cols-1 gap-2 max-h-[50dvh] overflow-scroll">
                            {flightData?.map(flight => (
                                <FlightItem {...flight} />
                            ))}
                            {!flightData && <div className="bg-primary-white rounded-lg rounded-es-none h-fit p-5">No Record Found!</div>}
                        </div>
                        {/* <!-- flight box - end --> */}
                        {/* <!-- sort box - start --> */}
                        <div id="sort-box">
                            <div id="sort-by" className="flex flex-col items-start p-2">
                                <label htmlFor="#sort" className="font-bold text-sm p-1">Sort by:</label>
                                <select name="sort" id="sort"
                                    className="px-3 py-2 bg-white w-full rounded-lg capitalize text-xs">
                                    <option value="lowest">lowest price</option>
                                    <option value="highest">highest price</option>
                                </select>
                            </div>
                            <div id="arrival-time" className="text-xs p-2">
                                <p className="p-1 capitalize font-bold text-sm">arrival time</p>
                                <div id="arrival-time-inputs" className="grid grid-cols-6 gap-1 py-1">
                                    <input type="radio" name="arrival" id="arrival" checked></input>
                                    <label className="col-span-5" htmlFor="">5:00 AM - 11:59 AM</label>
                                    <input type="radio" name="arrival" id="arrival"></input>
                                    <label className="col-span-5" htmlFor="">12:00 PM - 5:59 PM</label>
                                </div>
                            </div>
                            <div id="stops" className="text-xs p-2">
                                <p className="p-1 capitalize font-bold text-sm">stops</p>
                                <div id="stops-inputs" className="py-1 grid grid-cols-6 gap-1">
                                    <input type="radio" name="stops" id="stops" checked></input>
                                    <p className="col-span-5 flex justify-between"><label htmlFor="">Nonstop</label><label
                                        htmlFor="">$230</label>
                                    </p>
                                    <input type="radio" name="stops" id="stops"></input>
                                    <p className="col-span-5 flex justify-between"><label htmlFor="">1 Stop</label><label
                                        htmlFor="">$230</label>
                                    </p>
                                    <input type="radio" name="stops" id="stops"></input>
                                    <p className="col-span-5 flex justify-between"><label htmlFor="">2+ Stops</label><label
                                        htmlFor="">$230</label>
                                    </p>
                                </div>
                            </div>
                            <div id="airlines-included" className="p-2">
                                <p className="p-1 capitalize font-bold text-sm">airlines included</p>
                                <div className="py-1 grid grid-cols-6 gap-1">
                                    <input type="radio" name="airlines" id="airlines" checked></input>
                                    <p className="col-span-5 flex justify-between text-xs capitalize"><label
                                        htmlFor="">alitalia</label><label htmlFor="">$230</label></p>
                                    <input type="radio" name="airlines" id="airlines"></input>
                                    <p className="col-span-5 flex justify-between text-xs capitalize"><label
                                        htmlFor="">lufthansa</label><label htmlFor="">$230</label></p>
                                    <input type="radio" name="airlines" id="airlines"></input>
                                    <p className="col-span-5 flex justify-between text-xs capitalize"><label htmlFor="">air
                                        france</label><label htmlFor="">$230</label></p>
                                    <input type="radio" name="airlines" id="airlines"></input>
                                    <p className="col-span-5 flex justify-between text-xs capitalize"><label htmlFor="">brussels
                                        airlines</label><label htmlFor="">$230</label></p>
                                    <input type="radio" name="airlines" id="airlines"></input>
                                    <p className="col-span-5 flex justify-between text-xs capitalize"><label htmlFor="">air
                                        italy</label><label htmlFor="">$230</label></p>
                                    <input type="radio" name="airlines" id="airlines"></input>
                                    <p className="col-span-5 flex justify-between text-xs capitalize"><label
                                        htmlFor="">siberia</label><label htmlFor="">$230</label></p>
                                    <input type="radio" name="airlines" id="airlines"></input>
                                    <p className="col-span-5 flex justify-between text-xs capitalize"><label
                                        htmlFor="">ataturk</label><label htmlFor="">$230</label></p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- sort box - end --> */}
                    </div>
                    {/* <!-- flights - end --> */}
                </div>
                {/* <!-- left side - end --> */}
                {/* <!-- right side - start --> */}
                <div id="right-side" className="p-3">
                    <div id="other-menus" className="flex flex-col gap-3">
                        <div id="menu-item" className="relative w-56 h-56 rounded-xl overflow-hidden">
                            <img src={VintageCarImg} alt=""
                                className="absolute w-full h-full object-cover"></img>
                            <div id="menu-title" className="absolute left-3 bottom-3 text-white">
                                <span id="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="lucide lucide-car-front">
                                        <path
                                            d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
                                        <path d="M7 14h.01" />
                                        <path d="M17 14h.01" />
                                        <rect width="18" height="8" x="3" y="10" rx="2" />
                                        <path d="M5 18v2" />
                                        <path d="M19 18v2" />
                                    </svg>
                                </span>
                                <p className="uppercase text-base uppercase font-bold">car rentals</p>
                            </div>
                        </div>
                        <div id="menu-item" className="relative w-56 h-56 rounded-xl overflow-hidden">
                            <img src={BlueHotelImg} alt=""
                                className="absolute w-full h-full object-cover"></img>
                            <div id="menu-title" className="absolute left-3 bottom-3 text-white">
                                <span id="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="lucide lucide-hotel">
                                        <path d="M10 22v-6.57" />
                                        <path d="M12 11h.01" />
                                        <path d="M12 7h.01" />
                                        <path d="M14 15.43V22" />
                                        <path d="M15 16a5 5 0 0 0-6 0" />
                                        <path d="M16 11h.01" />
                                        <path d="M16 7h.01" />
                                        <path d="M8 11h.01" />
                                        <path d="M8 7h.01" />
                                        <rect x="4" y="2" width="16" height="20" rx="2" />
                                    </svg>
                                </span>
                                <p className="uppercase text-base uppercase font-bold">hotels</p>
                            </div>
                        </div>
                        <div id="menu-item" className="relative w-56 h-56 rounded-xl overflow-hidden">
                            <img src={GreenHolidayImg} alt=""
                                className="absolute w-full h-full object-cover"></img>
                            <div id="menu-title" className="absolute left-3 bottom-3 text-white">
                                <span id="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="lucide lucide-umbrella">
                                        <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
                                        <path d="M12 12v8a2 2 0 0 0 4 0" />
                                        <path d="M12 2v1" />
                                    </svg>
                                </span>
                                <p className="uppercase text-base uppercase font-bold">travel packages</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- right side - end --> */}
            </div>
            {/* <!-- content box - end --> */}
        </div>
        // <!-- main box - end -->
    )
}