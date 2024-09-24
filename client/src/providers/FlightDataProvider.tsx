import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAxios } from "./AxiosProvider";

type FlightDataContextType = {
    flightData: Array<any> | null,
    setFlightData(value: any): void,
};

const FlightDataContext = createContext<FlightDataContextType>({
    flightData: [{}] || null,
    setFlightData: () => { },

});

const FlightDataProvider = ({ children }: { children: ReactNode }) => {
    const [flightData, setFlightData] = useState<Array<any> | null>(null);

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