import { createContext, useState } from "react";

export const TotalPayContext = createContext()

const TotalPayProvider = ({ children }) => {
    const [total, setTotal] = useState(0)

    return (
        <TotalPayContext.Provider value={{ total, setTotal }} >
            {children}
        </TotalPayContext.Provider>
    )
}

export default TotalPayProvider