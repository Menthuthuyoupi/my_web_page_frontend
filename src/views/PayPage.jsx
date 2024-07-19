import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Button } from 'react-bootstrap'

import { PedidoContext } from '../context/PedidoContext'
import { TotalPayContext } from '../context/TotalPayContext'

import ButtonAmount from '../components/ButtonAmount'

const PayPage = () => {
    const { pedido } = useContext(PedidoContext)
    const { total } = useContext(TotalPayContext)

    const navigate = useNavigate()

    const volverAlHome = ()=>{
      navigate('/')
    }

    return (
    <Container style={{minHeight:'71vh', margin:'2vh auto'}}>
        {
        
            <Container>
                <h2>Detalles del pedido</h2>
                    <ul>
                    {
                        pedido.map(producto =>
                        <li key={producto.id} className='d-flex justify-content-between py-2 border-bottom' style={{textAlign:'start',listStyleType:'none'}}>
                            <div className='d-flex'>
                                <div className='me-3'><img src={producto.imagen} style={{width:'50px',height:'50px'}}/></div>
                                <div className='d-flex justify-content-between align-items-center'><h5 className='mb-0 text-center'>{producto.nombre}</h5></div>
                            </div>
                            <ButtonAmount precio={producto.precio} />
                        </li>
                        )
                    }
                    </ul>
                <h2>Total: {total}</h2>
                <div className='d-flex justify-content-center pb-2'>
                    <Button className='me-2' variant='outline-success'>Ir a pagar</Button>
                    <Button variant='outline-info' onClick={volverAlHome}>Volver al inicio</Button>
                </div>
            </Container>
        }
    </Container>
  )
}

export default PayPage