import { FC, ReactNode, useMemo } from "react";
import React from "react";
import jwt from "jwt-decode"

interface Props {
    children: ReactNode;
}

interface AuthContextData {
    saveToken: (token: string) => void;
    clearToken: () => void;
    user: User | null;
}

interface User {
    username: string;
    roles: string[];
}

const AuthContext = React.createContext<AuthContextData | null>(null)

const AuthProvider: FC<Props> = ({ children }) => {

    const [user, setUser] = React.useState<User | null>(null)

    React.useEffect(() => {
        const jwtToken = localStorage.getItem("token")
        
        if (jwtToken != null && user == null) {
            const decodedToken = jwt<{sub: string, roles: string[] }>(jwtToken)

            setUser({
                username: decodedToken.sub,
                roles: decodedToken.roles
            })
        }
    
    }, [])

    const clearToken = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    const saveToken = (token: string) => {
        localStorage.setItem("token", token)
        const decodedToken = jwt<{sub: string, roles: string[] }>(token)

        setUser({
            username: decodedToken.sub,
            roles: decodedToken.roles
        })
    }

    const contextValue = useMemo(
        () => ({
            saveToken,
            clearToken,
            user
    }), [user])

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export const useAuth = () => React.useContext(AuthContext)