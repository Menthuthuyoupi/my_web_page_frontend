import React from 'react'
import { useContext } from 'react';

import { Button } from 'react-bootstrap'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { PedidoContext } from '../context/PedidoContext'
import { TotalPayContext } from '../context/TotalPayContext'
import { LoggedInContext } from '../context/LoggedInContext';

const AddProductButton = ({imagen, precio, id, nombre, id_usuario, descripcion}) => {
    const { pedido, setPedido } = useContext(PedidoContext)
    const { total, setTotal } = useContext(TotalPayContext)
    const { loggedIn } = useContext(LoggedInContext)

    const addProduct = () => {
        
        let estaDentro = false
        pedido.forEach(producto => {
            if(producto.id == id){
                estaDentro = true
            }
        })
        
        if(!estaDentro && loggedIn.id !== id_usuario){
            setPedido([...pedido, {imagen:imagen, precio:precio, id:id, nombre: nombre, descripcion: descripcion, cantidad: 1}])
            setTotal(total+precio)
        }
    }
    return (
        <Button className={`addProduct page-item me-1 ${loggedIn.id === 'notExist' ? "aria-disabled" : ""}`} variant="dark" onClick={addProduct} 
        style={loggedIn.id === 'notExist' ? { cursor: "not-allowed" } : { cursor: "pointer" }}>
            <AddShoppingCartIcon /> Agregar al carrito
        </Button>
  )
}

export default AddProductButton