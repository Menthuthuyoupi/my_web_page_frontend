import React from 'react'
import { useState } from 'react';

import { Form, Container, Col, Row, Button } from 'react-bootstrap' 

import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

import { postUser } from '../users';

const UsersPage = () => {
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState(false)
  const [confirmar, setConfirmar] = useState('')
  const [errorConfirmar, setErrorConfirmar] = useState(false)

  const [error, setError] = useState(false)
  const [exitoso, setExitoso] = useState(false)
  const [msg, setMsg] = useState(null)
  const [alerta, setAlerta] = useState(false)

  const registrarse = async () => {
    email.length < 10 ? (setErrorEmail(true), setError(true)) : setErrorEmail(false)
    password.length <= 3 ? (setErrorPassword(true), setError(true)) : setErrorPassword(false)
    confirmar.length <= 3 ? (setErrorConfirmar(true), setError(true)) : setErrorConfirmar(false)
    password !== confirmar || password.length <= 3 || confirmar.length <= 3 ? setAlerta(true) : setAlerta(false)

    setMsg(null)
    setExitoso(false)
    if(email.length > 10 && password.length > 3 && password === confirmar ){
      setError(false)
      const { message } = await postUser(email, password)
      if(message === 'Usuario Registrado con éxito'){
        setExitoso(true)
        setMsg(message)
      }else{
        setMsg(message)
        setExitoso(false)
      }       
    }
  }

  return (
    <Container >
      {
        exitoso ?
          <Container className='d-flex justify-content-center align-items-center' style={{height:'71vh', margin:'2vh auto'}}>
            <h2 className='text-success'>{msg}</h2>
          </Container>  
          :
          <Container className='d-flex align-items-center justify-content-center' style={{height:'71vh', margin:'2vh auto'}}>
            <Form className='border my-3 px-5 py-2'>
              <h2 className='text-center'>Bienvenido a Mercado del PC</h2>
              <p>Create una cuenta para entrar al sitio y poder comprar todo lo que tu quieras</p>
              {
                error ? 
                <h5 className='text-danger'>Rellena todos los campos</h5>
                  :
                null
              }
              {
                alerta ?
                <h5 className='text-danger'>Las contraseñas no coinciden o tienen menos de 3 dígitos</h5>
                  :
                 null 
              }
              <p className='text-danger'>{msg}</p>
              <Form.Group as={Row} className="mb-3 pt-2 pe-2" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" 
                  className={errorEmail ? 'border-danger' : null}
                  placeholder='Email'
                  value={email} onChange={({ target }) => setEmail(target.value)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 pe-2" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password"
                  className={errorPassword ? 'border-danger' : null}
                  placeholder='Password'
                  value={password} onChange={({ target }) => setPassword(target.value)}/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 pe-2" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Confirmar password
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" 
                  className={errorConfirmar ? 'border-danger' : null}
                  placeholder='Confirmar Password'
                  value={confirmar} onChange={({ target }) => setConfirmar(target.value)}/>
                </Col>
              </Form.Group>

              <Button className='mb-2' style={{width:'50%', fontWeight:'700'}} onClick={registrarse}>Registrarse</Button>

              <Container className='border-top'>
                <p className='mb-0'>Tambien puedes registrarte en:  </p>
                <a className='siguenos' href='https://www.facebook.com' target='_blank'><FacebookIcon className='ms-2' fontSize="large"/></a>
                <a className='siguenos' href='https://www.gmail.com' target='_blank'><EmailIcon className='ms-2' fontSize="large"/></a>
              </Container>
            </Form>
          </Container>
      }
    </Container>
  )
}

export default UsersPage