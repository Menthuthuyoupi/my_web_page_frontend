import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
 
import { Container } from 'react-bootstrap'

const AccessDenied = () => {
  const navigate = useNavigate()
  const denegado = () => {
    navigate('/accesodenegado')
  }

  useEffect(() =>{
        denegado()
  },[])

  return (
    <Container fluid className='publicarBox d-flex justify-content-center align-items-center'> 
      <h2>ACCESO DENEGADO</h2>
    </Container>
  )
}

export default AccessDenied