import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from 'react-bootstrap'

import NavNextPrevious from '../components/NavNextPrevious';
import CategoryProducts from '../components/CategoryProducts';
import OrderBySelect from '../components/OrderBySelect';
import LimitSelect from '../components/LimitSelect';

import { getProductos } from '../productos';

import NorthIcon from '@mui/icons-material/North';

const CategoriasPage = ({categoria, endpoint}) => {
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [productos, setProductos] = useState([])
    const [next, setNext] = useState(null)
    const [previous, setPrevious] = useState(null)
    const [order, setOrder] = useState("ASC")
    const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
      if(order !== "ASC" || limit !== 10 || page !== 1){
        navigate(`/${endpoint}?order=${order}&limit=${limit}&page=${page}`)
      }
    }, [order,limit,page])
  
    useEffect(() => {
      getProductos(categoria, page, order, limit, setProductos, setTotalPages, setNext, setPrevious, setTotal)
    }, [page, order, limit, categoria])

    useEffect(() => {
      setPage(1)
    }, [categoria])

    return (
      <>
        {
          total === 0 ?
            <Container className='d-flex justify-content-center align-items-center' style={{height:'71vh', margin:'2vh auto'}}>
              <h2>No hay productos en esta categoria</h2>
            </Container>
          :
            <Container className='my-4'>
              <Container className='row mb-2 ps-2 pe-0'>
                <Container className='d-flex justify-content-between col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2'>
                  <h2 className='text-start me-2'>{categoria.toUpperCase()}</h2>
                  <OrderBySelect setOrder={setOrder} />
                </Container>
                <Container className='d-flex col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2'>
                  <LimitSelect setLimit={setLimit} />
                  <Container fluid className='d-flex justify-content-end'>
                    <NavNextPrevious page={page} setPage={setPage} next={next} previous={previous} total={total} limit={limit}/> 
                  </Container>
                </Container>
              </Container>
  
              <CategoryProducts productos={productos} />
        
              <Container fluid className='d-flex justify-content-between py-2 mt-2 ps-0 pe-5'>
                <a className='d-flex justify-content-start' style={{color:'black'}} href='#'><NorthIcon fontSize='large'/>SUBIR</a>
                <NavNextPrevious page={page} setPage={setPage} next={next} previous={previous} total={total} limit={limit} />
              </Container>
            </Container>     
        }    
      </>
    )
}

export default CategoriasPage