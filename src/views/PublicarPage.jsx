import React from 'react'
import { useState, useContext } from 'react'

import { postProducto } from '../productos'
import { valideKey } from '../validacionInput';

import { LoggedInContext } from '../context/LoggedInContext';

import { Container, Button, Form, InputGroup } from 'react-bootstrap'
import CategorySelect from '../components/CategorySelect';

const PublicarPage = () => {
    const [nombre, setNombre] = useState('')
    const [errorNombre, setErrorNombre] = useState(false)
    const [imagen, setImagen] = useState('')
    const [errorImagen, setErrorImagen] = useState(false)
    const [descripcion, setDescripcion] = useState('')
    const [errorDescripcion, setErrorDescripcion] = useState(false)
    const [categoria, setCategoria] = useState('')
    const [errorCategoria, setErrorCategoria] = useState(false)
    const [precio, setPrecio] = useState(0)
    const [errorPrecio, setErrorPrecio] = useState(false)
    const [cantidad, setCantidad] = useState(0)
    const [errorCantidad, setErrorCantidad] = useState(false)
    const [response, setResponse] = useState('')

    const [alerta, setAlerta] = useState(false)

    const { loggedIn } = useContext(LoggedInContext)

    const enviarPublicacion = async() => {
        nombre.length <= 3 ? (setErrorNombre(true),setAlerta(true)) : setErrorNombre(false)
        imagen.length <= 15 ? (setErrorImagen(true),setAlerta(true)) : setErrorImagen(false)
        descripcion.length <= 10 ? (setErrorDescripcion(true),setAlerta(true)) : setErrorDescripcion(false)
        categoria === '' ? (setErrorCategoria(true),setAlerta(true)) : setErrorCategoria(false)
        precio <= 0 ? (setErrorPrecio(true),setAlerta(true)) : setErrorPrecio(false)
        cantidad <= 0 ? (setErrorCantidad(true),setAlerta(true)) : setErrorCantidad(false)

        if(nombre.length > 3 && imagen.length > 15 && descripcion.length > 10 && categoria !== '' && precio > 0 && cantidad > 0){
            const { message } = await postProducto(loggedIn.id, nombre, imagen, descripcion, precio, categoria, cantidad, loggedIn.token)
            setResponse(message)
            setNombre('')
            setImagen('')
            setDescripcion('') 
            setCategoria('') 
            setPrecio(0)
            setCantidad(0)
            setAlerta(false)
        }
    }

    return (
        <Container>
            {          
                <Container className='publicarBox' style={{height:'71vh', margin:'2vh auto'}}>
                    <h2 className='mb-5 text-start'>Publica tu Producto</h2>
                    {
                         response === "Producto publicado con éxito" ?
                            <h5 className='text-success'>{response}</h5>
                            :
                            <h5 className='text-danger'>{response}</h5>                          
                    }
                    {
                        alerta ?
                            <h5 className='text-danger text-start'>Rellenar todos los campos y no pueden ser muy cortos en dígitos</h5>
                            :
                            null
                    }
                    <div className="mb-3 d-flex">
                        <InputGroup.Text id="basic-addon1" style={{borderRadius:' 5px 0px 0px 5px '}}>Nombre del producto</InputGroup.Text>
                        <Form.Control
                        className={errorNombre ? 'border-danger w-100' : 'w-100'}
                        placeholder='Nombre del producto'
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={nombre}
                        onChange={({ target }) => setNombre(target.value)}  
                        style={{borderRadius:' 0px 5px 5px 0px '}}
                        />
                    </div>

                    <div className="mb-3 d-flex">
                        <InputGroup.Text id="basic-addon3" style={{borderRadius:' 5px 0px 0px 5px '}}>
                            https://example.com/../../imagen.jpg
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" value={imagen}
                        onChange={({ target }) => setImagen(target.value)}
                        className={errorImagen ? 'border-danger w-100' : 'w-100'}
                        placeholder='url_imagen de tu Producto'
                        style={{borderRadius:' 0px 5px 5px 0px '}}/>
                    </div>

                    <div className="mb-3 d-flex">
                        <InputGroup.Text style={{borderRadius:' 5px 0px 0px 5px '}}>Descripcion de tu Producto</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" value={descripcion}
                        onChange={({ target }) => setDescripcion(target.value)}
                        className={errorDescripcion ? 'border-danger w-100' : 'w-100'}
                        placeholder='Descripcion de tu Producto'
                        style={{borderRadius:' 0px 5px 5px 0px '}}/>
                    </div>

                    <CategorySelect setCategoria={setCategoria} errorCategoria={errorCategoria}/>

                    <div className="mb-3 d-flex">
                        <InputGroup.Text style={{borderRadius:' 5px 0px 0px 5px '}}>$</InputGroup.Text>
                        <Form.Control aria-label="Amount (to the nearest dollar)" value={precio}
                        onChange={({ target }) => setPrecio(target.value)} 
                        className={errorPrecio ? 'border-danger w-100' : 'w-100'}
                        placeholder='Precio'
                        style={{borderRadius:' 0px 5px 5px 0px '}}
                        onKeyDown={valideKey}
                        />
                    </div>

                    <div className="mb-3 d-flex">
                        <InputGroup.Text style={{borderRadius:' 5px 0px 0px 5px '}}>Cantidad</InputGroup.Text>
                        <Form.Control value={cantidad}
                        onChange={({ target }) => setCantidad(target.value)}
                        className={errorCantidad ? 'border-danger w-100' : 'w-100'}
                        placeholder='Cantidad'
                        style={{borderRadius:' 0px 5px 5px 0px '}}
                        onKeyDown={valideKey}                
                        />
                    </div>
                    
                    <Button variant="outline-success" onClick={enviarPublicacion} >Publicar el producto</Button>

                </Container>
            }
        </Container>
    )
}

export default PublicarPage