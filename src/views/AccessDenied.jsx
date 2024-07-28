import React from 'react'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoggedInContext } from '../context/LoggedInContext'
 
import { Container } from 'react-bootstrap'

const AccessDenied = () => {
  const { loggedIn } = useContext(LoggedInContext)

  const navigate = useNavigate()
  const denegado = () => {
    navigate('/accesodenegado')
  }

  const toLocation = () => {
    navigate(`/perfil`)
  }

  useEffect(() =>{
    if(!loggedIn.logged){
      denegado()
    }else{
      toLocation()
    }
  },[loggedIn.logged])

  return (
    <Container fluid className='publicarBox d-flex justify-content-center align-items-center'>
      {
        loggedIn.message === 'Tu Cuenta ha sido eliminada' ?
          <h2 className='text-danger'>Tu Cuenta ha sido eliminada</h2>
          :
          <h2>ACCESO DENEGADO</h2>
      }
    </Container>
  )
}

export default AccessDenied