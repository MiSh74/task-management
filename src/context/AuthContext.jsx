import React, { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext(null);

const def_data = {
    name: "john",
    pass: "123456"
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const data = localStorage.getItem("user_data");
        return data ? JSON.parse(data) : null;
    });

    const login = (name, pass) => {
        if (name !== def_data.name || pass !== def_data.pass) return;
        setUser(name);
        localStorage.setItem("user_data", JSON.stringify(name));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user_data");
    };

    const value = useMemo(() => ({ user, login, logout }), [user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
