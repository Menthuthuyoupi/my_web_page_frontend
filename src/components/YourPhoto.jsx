import React from 'react'

import { useContext, useState } from 'react'

import { LoggedInContext } from '../context/LoggedInContext';

import { Container, Button, Form, InputGroup } from 'react-bootstrap';

import { putYourPhoto } from '../users';

import ImageIcon from '@mui/icons-material/Image';

const YourPhoto = () => {
    const { loggedIn, setLoggedIn } = useContext(LoggedInContext)
    const [imagen, setImagen] = useState('')
    const [errorImagen, setErrorImagen] = useState(false)
  
    const actualizarTuFoto = async () => {
      if(imagen !== '' && imagen.length > 15){
        await putYourPhoto(loggedIn.id, imagen, setLoggedIn)
        setErrorImagen(false)
        setImagen('')
      }else{
        setErrorImagen(true)
        setImagen('')
      }    
    }
    return (
        <Container className='my-2'> 
            <div>
                <img src={loggedIn.photo} style={{width:'200px', height:'200px'}} />
                <p style={{color:'gray', fontSize:'12px'}}>Identificador del Usuario: {loggedIn.id}</p>
            </div>
            {
                errorImagen ? 
                    <h6 className='text-danger'>La url de la imagen es muy corta</h6>
                    :
                    null
            }
            <div className="mb-1 d-flex justify-content-center"> 
                <InputGroup.Text  id="basic-addon3" style={{borderRadius:' 5px 0px 0px 5px'}}>
                    <ImageIcon />
                </InputGroup.Text>
                <Form.Control  id="basic-url" aria-describedby="basic-addon3" placeholder="Url de tu Imagen" value={imagen}
                    className={errorImagen ? 'border-danger' : null}
                    onChange={({ target }) => setImagen(target.value)} style={{borderRadius:' 0px 5px 5px 0px ', maxWidth:'700px'}}
                    maxLength={200}/>
            </div>
            <Button variant="outline-success" onClick={actualizarTuFoto}>Actualizar tu foto</Button>
        </Container>
    )
}

export default YourPhoto