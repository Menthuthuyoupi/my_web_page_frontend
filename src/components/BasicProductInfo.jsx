import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import { Card, Button, Container } from 'react-bootstrap'

import AddButton from './AddButton'

const BasicProductInfo = ({imagen,nombre,categoria,precio, id}) => {
  const navigate = useNavigate()
  const productoID = () => {
    navigate(`/productos/${id}`)
  }
  return (
    <Card className='basicCardProduct mb-4 position-static' style={{minHeight:'590px', maxHeight:'630px'}}>
      <Button className='buttonImageProduct' onClick={productoID} style={{width: '100%', height:'230px'}}>
        <Card.Img style={{width: '100%', maxHeight:'100%'}} variant="top" src={imagen} />
      </Button>    
      <Card.Body className='basicCardProductBody pb-0'>
        <Card.Title style={{fontWeight:'700'}}>{nombre}</Card.Title>
        <Card.Text style={{fontWeight:'600'}}>
          Categoria: {categoria}
        </Card.Text>
        <Card.Text className='p-0 m-0' style={{fontWeight:'600'}}>
          ${precio}
        </Card.Text>
        <Card.Text className='p-0 m-0 mediodePago'>
          Transferencia
        </Card.Text>
        <Card.Text className='p-0 m-0' style={{fontWeight:'600'}}>
          ${Math.round(precio*1.1)}
        </Card.Text>
        <Card.Text className='mediodePago' style={{color:'grey'}}>
          Otros medios de pago
        </Card.Text>
        <Container>
          
        </Container>
      </Card.Body>
      <Card.Body>
        <AddButton imagen={imagen} precio={precio} id={id} nombre={nombre}/>
      </Card.Body>
    </Card>
  )
}

BasicProductInfo.propTypes = {
    imagen: PropTypes.string,
    nombre: PropTypes.string,
    categoria: PropTypes.string,
    precio: PropTypes.number,
    id: PropTypes.number
}

export default BasicProductInfo
