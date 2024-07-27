import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Button, Row, Col } from 'react-bootstrap'

import { PedidoContext } from '../context/PedidoContext'
import { TotalPayContext } from '../context/TotalPayContext'
import { LoggedInContext } from '../context/LoggedInContext'

import ButtonAmount from '../components/ButtonAmount'

import DeleteIcon from '@mui/icons-material/Delete';

import { putProduct, postMisCompras } from '../productos'

const PayPage = () => {
    const { pedido, setPedido } = useContext(PedidoContext)
    const { total, setTotal } = useContext(TotalPayContext)
    const { loggedIn } = useContext(LoggedInContext)

    const navigate = useNavigate()

    const volverAlHome = () => {
      navigate('/')
    }

    const irAComprar = () => {
        const pagar = confirm('Desea pagar ahora?')
        if(pagar && pedido.length > 0){
            pedido.forEach(p => {
                putProduct(p.id, p.precio, p.cantidad+' comprar', p.descripcion, p.imagen, p.nombre, loggedIn.token)
                postMisCompras(p.id, loggedIn.id, p.imagen, p.nombre, p.cantidad, loggedIn.token)
            })
            setPedido([])
            setTotal(0)
        }

    }

    const eliminarPedido = (id) => {
        const confirmar = confirm('Estas seguro de eliminar el pedido?')
        if(confirmar){
            const modPedido = pedido.filter(p => p.id !== id)
            const pedidoEliminado = pedido.filter(p => p.id === id)
            setPedido(modPedido)
            const nuevoTotal = total - pedidoEliminado[0].cantidad*pedidoEliminado[0].precio
            console.log(nuevoTotal)
            setTotal(nuevoTotal)
        }
    }

    return (
    <Container style={{minHeight:'71vh', margin:'2vh auto'}}>
        {
        
            <Container>
                <h2>Detalles del pedido</h2>
                    <ul>
                    {
                        pedido.map(producto =>
                        <li key={producto.id} className='py-2 border-bottom' style={{textAlign:'start',listStyleType:'none'}}>
                            <Row>
                                <Col className='d-flex'>
                                    <div className='me-3'><img src={producto.imagen} style={{width:'50px',height:'50px'}}/></div>
                                    <div className='d-flex justify-content-start align-items-center'><h5 className='mb-0'>{producto.nombre}</h5></div>
                                </Col>
                                <Col className='d-flex justify-content-end mt-1'>
                                    <ButtonAmount precio={producto.precio} producto={producto}/>
                                    <Button className='ms-5' variant="outline-danger" onClick={() => eliminarPedido(producto.id)}><DeleteIcon /></Button>
                                </Col>
                            </Row>
                        </li>
                        )
                    }
                    </ul>
                <h2>Total: {total}</h2>
                <div className='d-flex justify-content-center pb-2'>
                    <Button className='me-2' variant='outline-success' onClick={irAComprar}>Ir a pagar</Button>
                    <Button variant='outline-info' onClick={volverAlHome}>Volver al inicio</Button>
                </div>
            </Container>
        }
    </Container>
  )
}

export default PayPage