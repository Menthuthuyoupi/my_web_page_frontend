import React from 'react'
import { useState, useContext } from 'react'

import { TotalPayContext } from '../context/TotalPayContext'
import { PedidoContext } from '../context/PedidoContext'

import { Button } from 'react-bootstrap'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ButtonAmount = ({precio, producto}) => {
    const [count, setCount] = useState(1)
    const {total, setTotal} = useContext(TotalPayContext)
    const {pedido, setPedido} = useContext(PedidoContext)

    const incrementar = ()=>{
        setCount(count+1)
        producto.cantidad = count + 1
        const modPedido = pedido.map(p => p.id === producto.id ? {... p, producto} : p)
        setPedido(modPedido)
        setTotal(total+precio)
    }
    const decrementar = ()=>{
        if(count > 1){
            setCount(count-1)
            producto.cantidad = count - 1
            const modPedido = pedido.map(p => p.id === producto.id ? {... p, producto} : p)
            setPedido(modPedido)
            setTotal(total-precio)
        }            
    }
  return (
    <div className='d-flex'>
        <p className='my-2 me-2'>{`$ ${precio*count}`}</p>           
        <Button variant='danger' className='py-0 px-2' onClick={decrementar}><RemoveCircleIcon /></Button>
        <p className='my-2 mx-2'>{count}</p>
        <Button className='py-0 px-2' onClick={incrementar}><AddCircleIcon /></Button>
    </div>
  )
}

export default ButtonAmount