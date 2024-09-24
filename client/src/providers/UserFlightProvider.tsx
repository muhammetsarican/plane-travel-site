import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAxios } from "./AxiosProvider";
import { useFlightData } from "./FlightDataProvider";
import { useAuth } from "./AuthProvider";

type UserFlightDataContextType = {
    userFlightData: Array<any> | null,
    createUserFlight(data: any): void,
};

const UserFlightDataContext = createContext<UserFlightDataContextType>({
    userFlightData: [{}] || null,
    createUserFlight: () => { },
});

const UserFlightDataProvider = ({ children }: { children: ReactNode }) => {
    const [userFlightData, setUserFlightData] = useState<Array<any> | null>(null);

    const { client } = useAxios();

    const { currentFlight } = useFlightData();
    const { setAuthId } = useAuth();

    const getUserFlightData = () => {
        client("/user-flight")
            .then((response: any) => {
                setUserFlightData(response.data.message);
            })
    }

    const createUserFlight = (data: any) => {
        client(`/user-flight/make-reservation/${currentFlight._id}`, {
            method: "post",
            data
        })
            .then((response: any) => {
                setAuthId(response.data.message.user_id);
                localStorage.setItem("user_id", response.data.message.user_id);
            })
    }

    useEffect(() => {
        getUserFlightData();
    }, []);

    const values = {
        userFlightData,
        createUserFlight,
    };

    return <UserFlightDataContext.Provider value={values}>
        {children}
    </UserFlightDataContext.Provider>
}

const useUserFlightData = () => useContext(UserFlightDataContext);

export {
    useUserFlightData,
    UserFlightDataProvider
}