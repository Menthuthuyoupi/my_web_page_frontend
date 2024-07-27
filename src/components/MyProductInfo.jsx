import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Card, Button } from 'react-bootstrap'

import PutButton from './PutButton'
import DeleteButton from './DeleteButton'

const MyProductInfo = ({producto}) => {
    const navigate = useNavigate()
    const productoID = () => {
      navigate(`/productos/${producto.href}`)
    }

    return (
      <Card className='basicCardProduct my-1 position-static' style={{minHeight:'590px', maxHeight:'630px'}}>
        <Button className='buttonImageProduct' onClick={productoID}><Card.Img style={{ width: '100%', maxHeight:'300px' }} variant="top" src={producto.imagen} /></Button>    
        <Card.Body className='basicCardProductBody'>
          <Card.Title style={{fontWeight:'700'}}>{producto.nombre}</Card.Title>
          <Card.Text style={{fontWeight:'600'}}>
            Categoria: {producto.categoria}
          </Card.Text>
          <Card.Text className='p-0 m-0' style={{fontWeight:'600'}}>
            ${producto.precio}
          </Card.Text>
        </Card.Body>
        <PutButton id={producto.href} cantidad={producto.cantidad}
         descripcion={producto.descripcion} url_imagen={producto.imagen} nombre={producto.nombre} />        
        <DeleteButton id={producto.href} />
      </Card>
    )
}

export default MyProductInfo