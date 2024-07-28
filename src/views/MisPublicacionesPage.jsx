import React from 'react'
import { useState, useEffect, useContext } from 'react';

import { LoggedInContext } from '../context/LoggedInContext';

import { Container } from 'react-bootstrap'

import NavNextPrevious from '../components/NavNextPrevious';
import MyProducts from '../components/MyProducts';
import OrderBySelect from '../components/OrderBySelect';
import LimitSelect from '../components/LimitSelect';

import NorthIcon from '@mui/icons-material/North';

import { getProductosIdUsuario } from '../productos';

const MisPublicacionesPage = () => {
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [productos, setProductos] = useState([])
    const [next, setNext] = useState(null)
    const [previous, setPrevious] = useState(null)
    const [order, setOrder] = useState("ASC")
    const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(0)

    const { loggedIn } = useContext(LoggedInContext)
  
    useEffect(() => {
        getProductosIdUsuario(page, order, limit, loggedIn.id, setProductos, setTotalPages, setNext, setPrevious, setTotal)
    }, [page, order, limit, productos])
  
    return (
      <Container>
        {
          productos.length !== 0 ? 
            <Container className='my-4' style={{minHeight:'71vh', margin:'2vh auto'}}>
              <Container className='row mb-2 pe-5'>
                <Container className='d-flex justify-content-between col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2'>
                  <h2 className='text-start me-2'>Mis Publicaciones</h2>
                  <OrderBySelect setOrder={setOrder} />
                </Container>
                <Container className='d-flex col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2'>
                  <LimitSelect setLimit={setLimit} />
                  <Container fluid className='d-flex justify-content-end'>
                    <NavNextPrevious page={page} setPage={setPage} next={next} previous={previous} total={total} limit={limit}/> 
                  </Container>
                </Container>
              </Container>
  
              <MyProducts productos={productos} />
      
              <Container fluid className='d-flex justify-content-end py-2 mt-2 pe-5'>
                <NavNextPrevious page={page} setPage={setPage} next={next} previous={previous} total={total} limit={limit} />
              </Container>
            </Container>
            :
            <Container className='d-flex justify-content-center align-items-center' style={{minHeight:'71vh', margin:'2vh auto'}}>
              <h2>No tienes productos a la venta</h2>
            </Container>
        }
        <a className='d-flex justify-content-start' style={{color:'black'}} href='#'><NorthIcon fontSize='large'/>SUBIR</a>
      </Container>
    )
}

export default MisPublicacionesPage