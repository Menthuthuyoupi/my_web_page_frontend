import React from 'react'

import MyProductInfo from './MyProductInfo'

import { Container } from 'react-bootstrap'

const MyProducts = ({productos, id_usuario, setProductos, setTotalPages, setNext, setPrevious, setTotal, page, limit, order}) => {

  return (
    <Container fluid className='d-flex justify-content-center row'>      
        {
            productos.map(producto => (
                <div key={producto.href} className='col-xs-12 col-sm-8 col-md-6 col-lg-4 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                    <MyProductInfo producto={producto}/>
                </div>
            ))
        }       
    </Container>
  )
}

export default MyProducts