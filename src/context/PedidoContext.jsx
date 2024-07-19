import { createContext, useState } from "react";

export const PedidoContext = createContext()

const PedidoProvider = ({ children }) => {
    const [pedido, setPedido] = useState([])

    return (
        <PedidoContext.Provider value={{ pedido, setPedido }} >
            {children}
        </PedidoContext.Provider>
    )
}

export default PedidoProvider