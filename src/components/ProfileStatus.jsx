import React from 'react'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { LoggedInContext } from '../context/LoggedInContext'
import { PedidoContext } from '../context/PedidoContext'
import { TotalPayContext } from '../context/TotalPayContext'

import { Container, Button, NavDropdown } from 'react-bootstrap'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfileStatus = () => {
    const { loggedIn, setLoggedIn } = useContext(LoggedInContext)
    const { setPedido } = useContext(PedidoContext)
    const { setTotal } = useContext(TotalPayContext)

    const setActiveClass = ({ isActive }) => ( isActive ? "active" : "noActive" )

    const navigate = useNavigate()

    const logout = () => {
        setLoggedIn({email:'', photo:'', id:'notExist', logged: false, nombre:'', prefijo: '', telefono: 11111111, birthdate: '1900-01-01'})
        setPedido([])
        setTotal(0)
        navigate('/')
    }

    return (
        <NavDropdown title={<span className="text-white">Tu Cuenta</span>}  id="navbarScrollingDropdown" className='me-5'>
            <Container className='d-flex flex-column'>
                <NavLink to="/perfil" className={setActiveClass} style={{padding:'8px 8px 0px 8px'}}>{loggedIn.email}</NavLink>
                <NavLink to="/perfil/miscompras" className={setActiveClass} style={{padding:'8px 8px 0px 8px'}}>Mis Compras</NavLink>
                <NavLink to="/perfil/pagar" className={setActiveClass} style={{padding:'8px 8px 0px 8px'}}>Pagar Pedidos<ShoppingCartIcon /></NavLink>
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