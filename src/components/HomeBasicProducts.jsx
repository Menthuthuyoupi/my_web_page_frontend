import React from 'react'
import { useEffect, useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import BasicProductInfo from './BasicProductInfo'

import { getProductosHome } from '../productos'

const HomeBasicProducts = ({ categoria }) => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductosHome(categoria, setProductos)
  }, [productos])

  const productosLimit4 = productos.slice(0, 4)
  
  return (
    <Container fluid>
      {
        productos.length !== 0 ?
          <Row>
            {
              productosLimit4.map(producto => (
                <Col className='d-flex justify-content-center' key={producto.id}>
                  <BasicProductInfo imagen={producto.url_imagen} nombre={producto.nombre} categoria={categoria} precio={producto.precio}
                   id={producto.id} id_usuario={producto.id_usuario} descripcion={producto.descripcion} />
                </Col>
              ))
            }
          </Row>
        :
          <Container className='d-flex justify-content, align-items-center'>
            <h2>No hay productos en esta categoria</h2>
          </Container>
      }
    </Container>
  )
}

export default HomeBasicProducts