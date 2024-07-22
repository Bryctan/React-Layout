import { createContext, useContext, useState } from 'react';
import AuthProviderProps from '../types/AuthTypes';

const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

export default function AuthProvider({ children }: AuthProviderProps) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}



export const useAuth = () => useContext(AuthContext);

