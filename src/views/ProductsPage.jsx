import React from 'react'
import { useState, useEffect, useContext } from 'react';

import { useParams } from 'react-router-dom'

import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import RecommendIcon from '@mui/icons-material/Recommend';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import AddProductButton from '../components/AddProductButton';

import { LoggedInContext } from '../context/LoggedInContext';

import { getProductobyId, getLikes, putLikes } from '../productos';

const ProductsPage = () => {
    const [producto, setProducto] = useState({})
    const [likes, setLikes] = useState(0)
    const { id } = useParams()
    const { loggedIn } = useContext(LoggedInContext)

    useEffect(() => {
        getProductobyId(id, setProducto)
        getLikes(id, setLikes)
    },[])

    const agregarLike = () => {
        if(loggedIn.id !== 'notExist'){
            putLikes(id, loggedIn.id, setLikes, loggedIn.token)
        } 
    }

    return (
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'75vh'}}>
        <Container className='boxProduct my-1 border' style={{borderRadius:'6px'}}>
            <Row>
                <Col className='p-5 d-flex justify-content-center align-items-center border col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'
                style={{maxHeight:'450px', minHeight:'350px'}}>
                    <Card.Img style={{ width: '100%', maxHeight:'100%'}} variant="top" src={producto.url_imagen} />
                </Col>
                <Col className='p-0 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <Container className='mx-0 px-0 productoInfo'>
                        <Container className='d-flex align-items-center text-start border' style={{minHeight:'20%'}}>
                            {producto.nombre}
                        </Container>
                        <Container className='d-flex align-items-center text-start border' style={{minHeight:'20%', color:'gray'}}>
                            <Container className='d-flex justify-content-between row'>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>ID producto {id}</div>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>Categoria Producto: {producto.categoria}</div>
                            </Container> 
                        </Container>
                        <Container className='d-flex align-items-center text-start border' style={{minHeight:'40%'}}>
                            {producto.descripcion}
                        </Container>
                        <Container className='d-flex align-items-center justify-content-between border' style={{minHeight:'20%', color:'gray'}}>
                            <div>Precio: <AttachMoneyIcon />{producto.precio}</div>
                            <div>Cantidad Disponible: {producto.cantidad}</div>
                        </Container>
                    </Container>
                </Col>
            </Row>
            <Row className='py-2 border'>
                <Col className='d-flex align-items-center justify-content-center col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                    <div className='d-flex align-items-center justify-content-center'> 
                        <Button className={`rounded-circle ${loggedIn.id === 'notExist' ? "aria-disabled" : ""}`} variant="outline-dark"
                         onClick={() => agregarLike()} style={loggedIn.id === 'notExist' ? { cursor: "not-allowed" } : { cursor: "pointer" }}>
                            <RecommendIcon fontSize='small'/>
                        </Button>
                        <p className='ms-3 mb-0 '>{likes}</p>                                               
                    </div>
                </Col>
                <Col>
                    <Container className='my-2' style={{maxWidth:'400px'}}>
                        <AddProductButton imagen={producto.url_imagen} precio={producto.precio} id={id} nombre={producto.nombre} id_usuario={producto.id_usuario}
                        descripcion={producto.descripcion}/>
                    </Container>
                </Col>   
            </Row>
        </Container>
    </Container>
  )
}

export default ProductsPage