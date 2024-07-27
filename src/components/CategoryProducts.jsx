import React from 'react'

import BasicProductInfo from './BasicProductInfo'

import { Container } from 'react-bootstrap'

const CategoryProducts = ({productos}) => {
  return (
    <Container fluid className='row'>
        {
             productos.map(producto => (
                <Container key={producto.href} className='col-xs-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mx-0'>
                    <BasicProductInfo imagen={producto.imagen} nombre={producto.nombre}
                    categoria={producto.categoria} precio={producto.precio} id={producto.href} id_usuario={producto.id_usuario} descripcion={producto.descripcion}/>
                </Container>
            ))
        }
    </Container>
  )
}

export default CategoryProducts