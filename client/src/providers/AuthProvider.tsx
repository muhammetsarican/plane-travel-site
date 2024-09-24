import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type AuthContextType = {
    authId: any | null,
    setAuthId(value: any): void,
};

const AuthContext = createContext<AuthContextType>({
    authId: "" || null,
    setAuthId: () => { },
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authId, setAuthId] = useState<any | null>(null);
    const values = {
        authId,
        setAuthId,
    };

    useEffect(() => {
        if (localStorage.getItem("user_id")) setAuthId(localStorage.getItem("user_id"));
    }, [])

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export {
    useAuth,
    AuthProvider
}