import React from 'react'
import { useContext } from 'react'

import { LoggedInContext } from '../context/LoggedInContext';

import { Container, Button} from 'react-bootstrap';

import { deleteYourAcc } from '../users';

const DeleteYourAcc = () => {
    const { loggedIn, setLoggedIn, logout } = useContext(LoggedInContext)

    const eliminarCuenta = () => {
      const desicion = confirm('estas seguro?')
      if(desicion){
        logout()
        deleteYourAcc(loggedIn.id, loggedIn.token, setLoggedIn)
      }
    }
    return (
        <Container>
            <Button variant="outline-danger" onClick={eliminarCuenta}>Eliminar Cuenta</Button>
        </Container>
    )
}

export default DeleteYourAcc