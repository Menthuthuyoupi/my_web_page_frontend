import React from 'react'
import { useContext } from 'react'
import { LoggedInContext } from '../context/LoggedInContext'

import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import FormSearch from './FormSearch'

import Logo from '../assets/estrella.jpg'
import ProfileStatus from './ProfileStatus'

const Navigation = () => {
  const setActiveClass = ({ isActive }) => ( isActive ? "active" : "noActive" )
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext)
  return (
    <Navbar className="bg-dark position-relative navHeight"> 
      <Container fluid className='bg-dark position-fixed navHeight'>
        <Navbar.Collapse id="navbarScroll" >
          <Container fluid className='d-flex justify-content-between my-0 mx-0 row'>
            <div className='d-flex justify-content-around col-md-12 col-lg-6 col-xl-5'>
                <Nav className="my-2 me-1 my-lg-0" style={{ maxHeight: '100px', color:'black'}} navbarScroll>
                  <NavLink to="/" className={setActiveClass} style={{ padding:'0px 0px 0px 5px'}}>
                    <img className='logoMarketplace' src={Logo} />
                    <p style={{fontSize:'10px', margin:'0'}}>Mercado del PC</p> 
                  </NavLink>
              </Nav>
              <FormSearch  />
            </div>

            <div className='col-md-12 col-lg-6 col-xl-7 d-flex justify-content-center'>
              <Nav className="my-2" style={{ maxHeight: '100px', color:'black' }} navbarScroll>
                <NavDropdown title={<span className="text-white">Hardware</span>} id="navbarScrollingDropdown">
                  <NavLink to="/procesadores" className="NavDropDown">Procesadores</NavLink>
                  <NavLink to="/tarjetadevideo" className="NavDropDown">Tarjeta de video</NavLink>
                  <NavLink to="/placamadre" className="NavDropDown">Placa Madre</NavLink>
                  <NavLink to="/ram" className="NavDropDown">Ram</NavLink>
                  <NavLink to="/discoduro" className="NavDropDown">Discos Duro</NavLink>
                  <NavLink to="/fuentedepoder" className="NavDropDown">Fuente de Poder</NavLink>
                  <NavLink to="/gabinetes" className="NavDropDown">Gabinetes</NavLink>
                </NavDropdown>               

                <NavDropdown title={<span className="text-white">Periféricos</span>}  id="navbarScrollingDropdown">
                  <NavLink to="/teclados" className="NavDropDown">Teclados</NavLink>
                  <NavLink to="/mouses"  className="NavDropDown">Mouses</NavLink>
                  <NavLink to="/pantallas" className="NavDropDown">Pantallas</NavLink>
                  <NavLink to="/audifonos" className="NavDropDown">Audífonos</NavLink>
                </NavDropdown>              
                {
                  loggedIn.logged ?
                    <ProfileStatus /> 
                    : 
                    <>
                      <NavLink to="/login" className={setActiveClass} style={{padding:'8px 8px 0px 8px'}}>Login</NavLink>
                      <NavLink to="/users" className={setActiveClass} style={{padding:'8px 0px 0px 0px'}}>Registrarse</NavLink>
                    </>
                }
              </Nav>
            </div>           
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation