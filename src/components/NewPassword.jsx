import React from 'react'
import { useState, useContext } from 'react'

import { LoggedInContext } from '../context/LoggedInContext';

import { Container, Form, Button } from 'react-bootstrap'

import { putNewPassword } from '../users'

const NewPassword = () => {
    const [newPassword, setNewPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState(false)
    const [msg, setMsg] = useState('')

    const { loggedIn } = useContext(LoggedInContext)

    const actualizarPassword = () => {
        if(newPassword.length >= 3 && newPassword === confirm){
            putNewPassword(loggedIn.id, newPassword, setMsg, loggedIn.token)
            setError(false)
            setNewPassword('')
            setConfirm('')
        }else{
            setError(true)
            setNewPassword('')
            setConfirm('')
        }
    }

    return (
        <Container className='my-3' style={{maxWidth:'800px'}}>
            <Container>
                <h4 className='text-start'>Cambiar Contraseña</h4>
                {
                error ? 
                    <h6 className='text-danger text-start'>Las contraseñas no coinciden o son menores a 3 digítos</h6>
                    :
                    (
                        msg === 'Password ha sido actualizado' ?
                            <h6 className='text-success'>{msg}</h6>
                            :
                            <h6 className='text-danger'>{msg}</h6>
                    )
                }
                <p className='m-0 text-start' style={{fontSize:'12px'}}>Contraseña</p>
                    <Form.Control type="password"
                    className={error ? 'border-danger' : null}
                    placeholder='Password'
                    value={newPassword} onChange={({ target }) => setNewPassword(target.value)}/>

                <p className='m-0 text-start' style={{fontSize:'12px'}}>Confirmar contraseña</p>   
                <Form.Control type="password" 
                className={error ? 'border-danger' : null}
                placeholder='Confirmar Password'
                value={confirm} onChange={({ target }) => setConfirm(target.value)}/>
            </Container>
            <Button className='mt-1' variant="outline-warning" onClick={actualizarPassword}>Actualizar Password</Button> 
        </Container>
    )
}

export default NewPassword