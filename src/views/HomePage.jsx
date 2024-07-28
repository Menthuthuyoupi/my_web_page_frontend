import React from 'react'

import { Container } from 'react-bootstrap'

import HomeBasicProducts from '../components/HomeBasicProducts'

import NorthIcon from '@mui/icons-material/North';

const HomePage = () => {

  return (
    <Container className='px-0 mx-0' fluid style={{minHeight:'75vh'}}>
      <Container fluid className='px-0 mx-0'>
        <Container fluid className='mainImage'>
          <Container className='d-flex justify-content-center divImage'> 
            <h1>Los mejores en tecnología</h1>
          </Container>
        </Container>
      </Container>

      <Container className='my-4'>
        <Container fluid >
          <h2 className='text-start'>Procesadores</h2>
        </Container>
        <HomeBasicProducts categoria={'procesador'} />
      </Container>

      <Container className='my-4'>
        <Container fluid >
          <h2 className='text-start'>Tarjetas de video</h2>
        </Container>
        <HomeBasicProducts categoria={'tarjeta de video'} />
      </Container>

      <Container className='my-4'>
        <Container fluid >
          <h2 className='text-start'>Placas Madre</h2>
        </Container>
        <HomeBasicProducts categoria={'placa madre'} />
      </Container>
      <Container>
        <a className='d-flex justify-content-start' style={{color:'black'}} href='#'><NorthIcon fontSize='large'/>SUBIR</a>
      </Container>
    </Container>
  )
}

export default HomePage