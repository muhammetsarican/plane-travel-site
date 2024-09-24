import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAxios } from "./AxiosProvider";

type FlightDataContextType = {
    flightData: Array<any> | null,
    setFlightData(value: any): void,
    currentFlight: any | null,
    setCurrentFlight(value: any): void,
};

const FlightDataContext = createContext<FlightDataContextType>({
    flightData: [{}] || null,
    setFlightData: () => { },
    currentFlight: {} || null,
    setCurrentFlight: () => { },
});

const FlightDataProvider = ({ children }: { children: ReactNode }) => {
    const [flightData, setFlightData] = useState<Array<any> | null>(null);
    const [currentFlight, setCurrentFlight] = useState<any | null>(null);

    const { client } = useAxios();

    const getFlightData = () => {
        client("/flight")
            .then((response: any) => {
                setFlightData(response.data?.message)
            })
    }

    useEffect(() => {
        getFlightData();
    }, []);

    const values = {
        flightData,
        setFlightData,
        currentFlight,
        setCurrentFlight,
    };

    return <FlightDataContext.Provider value={values}>
        {children}
    </FlightDataContext.Provider>
};

const useFlightData = () => useContext(FlightDataContext);

export {
    useFlightData,
    FlightDataProvider
}