import React from 'react'
import { NavLink } from 'react-router-dom';

import { Container } from 'react-bootstrap'

import Logo from '../assets/estrella.jpg'

import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <Container fluid className='bg-secondary footerBox'>
            <Container fluid className='d-flex justify-content-evenly px-5 py-3 row' style={{fontSize:'25px'}}>
                <div className='px-1 d-flex justify-content-around col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <NavLink to="/" className='d-flex align-items-center' style={{ padding:'3px 0px 3px 5px'}}>                       
                        <div>
                            <img className='logoMarketplace' src={Logo} />
                            <p className='text-center' style={{fontSize:'12px', margin:'0'}}>Mercado del PC</p> 
                        </div>                       
                    </NavLink>
                    <div className='ps-5 pt-1'>
                        <NavLink className='contactame d-flex align-items-center' to="mailto:admin@gmail.com" style={{ padding:'3px 0px 3px 5px'}}>
                            <div>
                                <WhatsAppIcon  className='ms-2' fontSize="large"/>
                                <p className='text-center' style={{fontSize:'12px', margin:'0'}}>Contactame</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            
                <div className='px-5 d-flex justify-content-center align-items-center col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <p className='p-0 m-0'>Síguenos</p>
                    <a className='siguenos' href='https://www.facebook.com/DragonGaming' target='_blank'><FacebookIcon className='ms-2' fontSize="large"/></a>
                    <a className='siguenos' href='https://x.com/DragonGaming' target='_blank'><XIcon className='ms-2' fontSize="large"/></a>
                    <a className='siguenos' href='https://www.instagram.com/DragonGaming' target='_blank'><InstagramIcon className='ms-2' fontSize="large"/></a>
                    <a className='siguenos' href='https://www.youtube.com/DragonGaming' target='_blank'><YouTubeIcon className='ms-2' fontSize="large"/></a>                
                </div>
            </Container>
            <Container fluid className='text-white py-2'>
                copyright <CopyrightIcon /> 2024 La tienda tecnológica DragonGaming.com Todos los derechos reservados
            </Container>
        </Container>
    )
}

export default Footer