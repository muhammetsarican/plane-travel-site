import { useEffect, useState } from "react";
import { useAuth } from "../../../../../providers/AuthProvider";
import { useUserFlightData } from "../../../../../providers/UserFlightProvider"
import { useFlightData } from "../../../../../providers/FlightDataProvider";

export default (option: any) => {
    const [isReserved, setIsReserved] = useState(false);

    const { userFlightData, createUserFlight } = useUserFlightData();
    const { currentFlight } = useFlightData();

    const { authId } = useAuth();

    const createData: any = {
        price: option.price,
    }

    if (authId) createData["user_id"] = authId;

    const handleClick = () => {
        confirm(`Are you sure for ${option.price}?`) && createUserFlight(createData);
    }

    useEffect(() => {
        userFlightData?.forEach(element => {
            if (element.reserved_flight_id !== currentFlight._id) return;
            if (element.user_id !== authId) return;
            if (element.price !== option.price) return;
            setIsReserved(true);
        })
    }, [, userFlightData])

    if (isReserved) return <button id="disabled"
        className="flex flex-col gap-5 justify-center items-center border rounded-md bg-slate-100 p-3">
        <p className="text-4xl text-slate-300 font-semibold w-14">···</p>
    </button>
    if (!isReserved) return (
        <button className="flex flex-col gap-5 items-center border rounded-md capitalize p-3" onClick={handleClick}>
            <p className="font-bold text-lg">{option.price}</p>
            <p className="text-xs text-slate-400 font-semibold w-14">{option.name}</p>
        </button>
    )
}