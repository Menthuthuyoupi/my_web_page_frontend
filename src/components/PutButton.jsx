import React from 'react'
import { useState, useContext } from 'react';

import { LoggedInContext } from '../context/LoggedInContext';

import { Button, Container, Form } from 'react-bootstrap'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { putProduct } from '../productos';
import { valideKey } from '../validacionInput';

const PutButton = ({id, cantidad, descripcion, url_imagen, nombre}) => {
  const [precio, setPrecio] = useState('')
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext)

  const modificarProducto = () => {
    const confirmar = confirm('Estas segudo de cambiar el precio de tu producto?')
    if(confirmar){
      putProduct(id, precio, cantidad+' default', descripcion, url_imagen, nombre, loggedIn.token)
      setPrecio('')
    }
  }
  
  return (
    <Container className='mb-2 d-flex px-0'>
      <Button variant="outline-warning" onClick={() => modificarProducto()}>
          <ModeEditIcon />
      </Button>
      <Form.Control type="text" pattern="[0-9]" placeholder="Cambiar el precio" aria-label="precio" style={{width:'100%', height:'50px'}} 
      value={precio} onChange={({ target }) => setPrecio(target.value)}
      onKeyDown={valideKey}
      />
    </Container>
  )
}

export default PutButton