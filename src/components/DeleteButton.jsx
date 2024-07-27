import React from 'react'
import { useContext } from 'react';

import { Button } from 'react-bootstrap'

import DeleteIcon from '@mui/icons-material/Delete';

import { LoggedInContext } from '../context/LoggedInContext'

import { deleteProducto } from '../productos';

const DeleteButton = ({id}) => {
  const { loggedIn } = useContext(LoggedInContext)
  const eliminarProducto = () => {
    const confirmar = confirm('Estas seguro de eliminar tu producto?')
    if(confirmar){
      deleteProducto(id, loggedIn.token)
    }
  }

  return (
    <Button variant="outline-danger" onClick={() => eliminarProducto()}>
        <DeleteIcon />
    </Button>
  )
}

export default DeleteButton