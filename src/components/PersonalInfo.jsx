import React from 'react';
import { useState, useContext } from 'react';

import { LoggedInContext } from '../context/LoggedInContext';

import { Container, Button, Form, InputGroup } from 'react-bootstrap';

import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import { valideKey } from '../validacionInput';
import { putYourInfo } from '../users';

const PersonalInfo = () => {
    const {loggedIn, login } = useContext(LoggedInContext)
    
    const [nombre, setNombre] = useState(loggedIn.nombre)
    const [prefijo, setPrefijo] = useState(loggedIn.prefijo)
    const [telefono, setTelefono] = useState(loggedIn.telefono)
    const [birthdate, setBirthdate] = useState(loggedIn.birthdate)

    const actualizarDatos = () => {
        if(nombre && prefijo && telefono && birthdate){
            putYourInfo(loggedIn.id, nombre, prefijo, telefono, birthdate, setNombre, setPrefijo, setTelefono, setBirthdate, loggedIn.token)
            login({ ... loggedIn, nombre: nombre, prefijo: prefijo, telefono: telefono, birthdate: birthdate})
        }
    }
    return (
    <Container className='mt-3'>
        <div className='d-flex justify-content-center'>
            <InputGroup.Text  id="basic-addon3" style={{borderRadius:' 5px 0px 0px 5px'}}>
                <EmailIcon />
            </InputGroup.Text>                   
            <Form.Control value={loggedIn.email} type='email' disabled style={{borderRadius:' 0px 5px 5px 0px', maxWidth:'700px'}}/>
        </div>
        <div className='d-flex justify-content-center'>
            <InputGroup.Text  id="basic-addon3" style={{borderRadius:' 5px 0px 0px 5px'}}>
                <DriveFileRenameOutlineIcon />
            </InputGroup.Text>                  
            <Form.Control value={nombre} onChange={({target})=> setNombre(target.value)} placeholder='tuNombre' 
                type='text' style={{borderRadius:' 0px 5px 5px 0px', maxWidth:'700px'}}/>
        </div>
        <div className='d-flex justify-content-center'>
            <InputGroup.Text  id="basic-addon3" style={{borderRadius:' 5px 0px 0px 5px', maxWidth:'700px'}}>
                <SmartphoneIcon />
            </InputGroup.Text>
            <Form.Select defaultValue={prefijo} onChange={({target}) => setPrefijo(target.value)}
            className='py-2' style={{width:'100px', borderRadius:'0px'}}>
                <option value={'prefijo'} >Prefijo</option>
                <option value="51">+51</option>
                <option value="52">+51</option>
                <option value="53">+53</option>
                <option value="54">+54</option>
                <option value="55">+55</option>
                <option value="56">+56</option>
                <option value="57">+57</option>
                <option value="58">+58</option>
                <option value="59">+59</option>
            </Form.Select>               
            <Form.Control value={telefono} onChange={({target})=> setTelefono(target.value)} type='text'
                style={{borderRadius:' 0px 5px 5px 0px', maxWidth:'600px'}} onKeyDown={valideKey}/>
        </div>             
        <div className='d-flex justify-content-center'>
            <InputGroup.Text  id="basic-addon3" style={{borderRadius:' 5px 0px 0px 5px'}}>
                <CakeIcon />
            </InputGroup.Text> 
            <Form.Control value={birthdate ? birthdate.split('T')[0] : null} onChange={({target})=> setBirthdate(target.value)} type='date'
            style={{borderRadius:' 0px 5px 5px 0px', maxWidth:'700px'}}/>           
        </div>

        <Button className='mt-1' variant="outline-warning" onClick={actualizarDatos}>Actualizar Datos</Button>               
    </Container>
  )
}

export default PersonalInfo