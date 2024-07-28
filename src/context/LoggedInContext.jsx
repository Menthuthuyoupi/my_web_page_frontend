import { createContext, useState, useEffect } from "react";

export const LoggedInContext = createContext()

const LoggedInProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState({})

    useEffect(() => {
        const storedAuthData = localStorage.getItem('loggedIn')
        if (storedAuthData) {
            setLoggedIn(JSON.parse(storedAuthData))
        }
    }, [])

    const login = (data) => {
        setLoggedIn(data)
        localStorage.setItem('loggedIn', JSON.stringify(data))
    }

    const logout = () => {
        setLoggedIn({})
        localStorage.removeItem('loggedIn')
    }

    return (
        <LoggedInContext.Provider value={{ loggedIn, login, logout, setLoggedIn }} >
            {children}
        </LoggedInContext.Provider>
    )
}

export default LoggedInProvider