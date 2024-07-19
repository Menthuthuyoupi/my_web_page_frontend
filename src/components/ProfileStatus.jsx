import React from 'react'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { LoggedInContext } from '../context/LoggedInContext'


import { Container, Button, NavDropdown } from 'react-bootstrap'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfileStatus = () => {
    const { loggedIn, setLoggedIn } = useContext(LoggedInContext)
    const setActiveClass = ({ isActive }) => ( isActive ? "active" : "noActive" )

    const navigate = useNavigate()

    const logout = () => {
        setLoggedIn({imagen:'', logged: false, id: 'notExist', email:''})
        navigate('/')
    }

    return (
        <NavDropdown title={<span className="text-white">Tu Cuenta</span>}  id="navbarScrollingDropdown" className='me-5'>
            <Container className='d-flex flex-column'>
                <NavLink to="/perfil" className={setActiveClass} style={{padding:'8px 8px 0px 8px'}}>{loggedIn.email}</NavLink>
                <NavLink to="/perfil/pagar" className={setActiveClass} style={{padding:'8px 8px 0px 8px'}}>Mis Pedidos<ShoppingCartIcon /></NavLink>
                <NavLink to="/perfil/mispublicaciones" className={setActiveClass} style={{padding:'8px 8px 0px 8px'}}>Mis Publicaciones</NavLink>
                <NavLink to="/perfil/publicar" className={setActiveClass} style={{padding:'8px 8px 0px 8px'}}>Publicar</NavLink>
                <Button variant="outline-danger" onClick={logout} style={{height:'40px'}}>
                    <NavLink to="/" className={setActiveClass} style={{padding:'8px 8px 0px 8px'}}>
                        <LogoutIcon fontSize='small'/> 
                    </NavLink>
                </Button> 
            </Container>
        </NavDropdown>
    )
}

export default ProfileStatus