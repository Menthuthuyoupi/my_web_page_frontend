import { createContext, useState } from "react";

export const LoggedInContext = createContext()

const LoggedInProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState({email:'', photo:'', id:'notExist', logged: false, nombre:'', prefijo: '', telefono: 11111111, birthdate: '1900-01-01'})

    return (
        <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }} >
            {children}
        </LoggedInContext.Provider>
    )
}

export default LoggedInProvider