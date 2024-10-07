import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData && userData.token) {
            setIsAuthenticated(true);
            setToken(userData.token);
            setEmail(userData.email);
        }
        setIsLoading(false);
    }, []);

    function setUser(userData) {
        setIsAuthenticated(true);
        setToken(userData.token);
        setEmail(userData.email);
        localStorage.setItem("user", JSON.stringify(user));
    }

    function clearUser() {
        setIsAuthenticated(false);
        setToken(null);
        setEmail(null);
        localStorage.removeItem("user");
    }

    const authValue = {
        isAuthenticated,
        setIsAuthenticated,
        token,
        email,
        isLoading,
        setUser,
        clearUser,
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
}


