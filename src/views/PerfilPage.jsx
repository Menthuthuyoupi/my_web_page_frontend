import React from 'react'
import { useContext, useState } from 'react'

import { LoggedInContext } from '../context/LoggedInContext';

import { Container, Button, Form, InputGroup } from 'react-bootstrap';

import { putYourPhoto } from '../users';

const PerfilPage = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext)
  const [imagen, setImagen] = useState('')
  const [errorImagen, setErrorImagen] = useState(false)

  const actualizarTuFoto = async () => {
    if(imagen !== '' && imagen.length > 15){
      setErrorImagen(false)
      const tuInfo = await putYourPhoto(loggedIn.id, imagen)
      setLoggedIn(tuInfo)
      setImagen('')
    }else{
      setErrorImagen(true)
    }    
  }

  return (
    <Container>
      { 
        <Container className='p-2 border d-flex justify-content-start perfil px-0'>
          <Container className='px-0'>
            <div className='w-100 d-flex justify-content-center'>
              <p className='border p-2' style={{width:'400px'}}>Correo del usuario: {loggedIn.email}</p>
            </div>
            <Container className='px-2'>
              <div>
                <img src={loggedIn.photo} style={{width:'200px', height:'200px'}} />
                <p style={{color:'gray', fontSize:'12px'}}>Identificador del Usuario: {loggedIn.id}</p>
              </div>
              {
                errorImagen ? 
                  <h5 className='text-danger'>La url de la imagen es muy corta</h5>
                    :
                  null
              }
              <div className="mb-3 mx-1 row">
                <div className='col-12 col-md-5 col-lg-4 col-xl-3 col-xxl-3 px-0'>
                  <InputGroup.Text  id="basic-addon3" style={{borderRadius:' 5px 0px 0px 5px'}}>
                    https://example.com/../imagen.jpg
                  </InputGroup.Text>
                </div>
                <div className='col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 px-0'>
                  <Form.Control  id="basic-url" aria-describedby="basic-addon3" placeholder="Url de tu Producto" value={imagen}
                  className={errorImagen ? 'border-danger' : null}
                  onChange={({ target }) => setImagen(target.value)} style={{borderRadius:' 0px 5px 5px 0px ', maxWidth:'700px'}}/>
                </div>
              </div>
              <Button variant="outline-success" onClick={actualizarTuFoto}>Actualizar tu foto</Button>
            </Container>
          </Container>
        </Container>
      }
    </Container>
  )
}

export default PerfilPage