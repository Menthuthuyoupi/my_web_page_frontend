import React from 'react'
import { useState, useEffect, useContext } from 'react'

import { LoggedInContext } from '../context/LoggedInContext'

import { Container, Row, Col } from 'react-bootstrap'
import { getMisCompras } from '../productos'

const MisComprasPage = () => {
    const { loggedIn } = useContext(LoggedInContext)
    const [ misCompras, setMisCompras ] = useState([])

    useEffect(() => {
        getMisCompras(loggedIn.id, setMisCompras)
      }, [misCompras])

    return (
        <Container style={{minHeight:'71vh', margin:'2vh auto'}}>
            {
    
                <Container>
                    <h2>Detalles de tus compras</h2>
                        <ul>
                        {
                            misCompras.map(producto =>
                            <li key={producto.id} className='py-2 border-bottom' style={{listStyleType:'none'}}>
                                <Row>
                                    <Container className='d-flex justify-content-start align-items-center col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                        <h4 className='me-3 mb-0'>x{producto.cantidad}</h4>
                                        <img className='me-4' src={producto.url_imagen} style={{width:'50px',height:'50px'}}/>
                                        <h5 className='mb-0'>{producto.nombre}</h5>
                                    </Container>
                                    <Container className='d-flex justify-content-start align-items-center col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                        <h5 className='mb-0'>fecha de compra: {producto.fecha.split('T')[0]} {producto.fecha.split('T')[1].split('.')[0]}</h5>
                                    </Container>
                                </Row>
                            </li>
                            )
                        }
                        </ul>
                </Container>
            }
        </Container>
    )
}

export default MisComprasPage