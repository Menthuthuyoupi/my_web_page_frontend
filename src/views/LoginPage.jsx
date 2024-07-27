import React from 'react'
import { useState, useContext } from 'react';

import { LoggedInContext } from '../context/LoggedInContext';

import { Form, Container, Col, Row, Button } from 'react-bootstrap' 

import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

import { postLogin } from '../users';

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ errorEmail, setErrorEmail] = useState(false)
  const [ errorPassword, setErrorPassword] = useState(false)
  const [alerta, setAlerta] = useState('')

  const { loggedIn, setLoggedIn } = useContext(LoggedInContext)

  const logearse = async () =>{
    email.length < 10 ? (setErrorEmail(true),setAlerta('')) : setErrorEmail(false)
    password.length <= 3 ? (setErrorPassword(true),setAlerta('')) : setErrorPassword(false)

    if(email.length > 10 && password.length > 3){
      const userLogged = await postLogin(email, password)
      setLoggedIn(userLogged)  
      setAlerta(userLogged.message)
    }    
  }

  return (
    <Container>       
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'71vh', margin:'2vh auto'}}>
        <Form className='border my-3 px-5 py-2'>
          <h2 className='text-center'>Bienvenido a Mercado del PC</h2>
          <p>Porfavor ingresa tus datos para entrar al sitio para poder comprar</p>
          {
            alerta === "La contraseña es incorrecta" || alerta === "El Email no existe" ? 
              <h5 className='text-danger'>{alerta}</h5>
              :
              null
          }
          {
            errorPassword || errorEmail ? 
              <h5 className='text-danger'>Los campos no pueden estar vacios o tener menos de 3 digitos</h5>
              :
              null  
          }
          <Form.Group as={Row} className="mb-3 pt-2 pe-2" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
                Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" className={errorEmail ? 'border-danger' : null}
              placeholder='usuario@ejemplo.com'
              value={email} onChange={({ target }) => setEmail(target.value)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 pe-2" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" className={errorPassword ? 'border-danger' : null}
              placeholder='Password'
              value={password} onChange={({ target }) => setPassword(target.value)}/>
            </Col>
            <Container className='d-flex justify-content-center'>
              <Button className='my-2' style={{width:'50%', fontWeight:'700'}} onClick={logearse} >Iniciar Sesión</Button>
            </Container>
          </Form.Group>
          <Container className='border-top'>
            <p className='mb-0'>Tambien puedes iniciar sesión en:  </p>
            <a className='siguenos' href='https://www.facebook.com' target='_blank'><FacebookIcon className='ms-2' fontSize="large"/></a>
            <a className='siguenos' href='https://www.gmail.com' target='_blank'><EmailIcon className='ms-2' fontSize="large"/></a>
          </Container>
        </Form>
      </Container>
    </Container>
  )
}

export default LoginPage