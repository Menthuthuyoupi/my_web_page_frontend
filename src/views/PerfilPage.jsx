import React from 'react'

import { Container } from 'react-bootstrap';

import PersonalInfo from '../components/PersonalInfo';
import NewPassword from '../components/NewPassword';
import YourPhoto from '../components/YourPhoto';
import DeleteYourAcc from '../components/DeleteYourAcc';


const PerfilPage = () => {

  return (
    <Container>
      <Container className='p-2 border d-flex justify-content-start perfil px-0'>
        <Container className='d-flex justify-content-center'>
          <Container>

            <YourPhoto />

            <PersonalInfo /> 

            <NewPassword />

            <DeleteYourAcc />

          </Container>  
        </Container>
      </Container>
    </Container>
  )
}

export default PerfilPage