import React from 'react'
import { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap'

import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

import NavNextPrevious from '../components/NavNextPrevious';
import CategoryProducts from '../components/CategoryProducts';
import OrderBySelect from '../components/OrderBySelect';
import LimitSelect from '../components/LimitSelect';

import { getProductosSearch } from '../productos';

const SearchPage = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [productos, setProductos] = useState([])
  const [next, setNext] = useState(null)
  const [previous, setPrevious] = useState(null)
  const [order, setOrder] = useState("ASC")
  const [limit, setLimit] = useState(10)
  const [total, setTotal] = useState(0)

  const { search, setSearch } = useContext(SearchContext)

  useEffect(() => {
    getProductosSearch(page, order, limit, search, setProductos, setTotalPages, setNext, setPrevious, setTotal)
  }, [page, order, limit, search])

  return (
    <>
      {
        total === 0 ?
          <Container className='d-flex justify-content-center align-items-center' style={{height:'71vh', margin:'2vh auto'}}>
            <h2>No hay productos de su búsqueda</h2>
          </Container>
        :
          <Container className='my-4'>
            <Container className='row mb-2 ps-2 pe-0'>
              <Container className='d-flex justify-content-between col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2'>
              <div>
                <h2 className='text-start me-2'>Resultados de la búsqueda</h2>
                <p className='mb-0' style={{fontSize:'12px'}}>palabra clave: {search}</p>
              </div>
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
      
            <Container fluid className='d-flex justify-content-end py-2 mt-2 pe-5'>
              <NavNextPrevious page={page} setPage={setPage} next={next} previous={previous} total={total} limit={limit} /> 
            </Container>         
          </Container>     
      }    
    </>
  )
}

export default SearchPage

