import React from 'react'

import { Container, Form } from 'react-bootstrap'

const LimitSelect = ({setLimit}) => {
  return (
    <Container className='d-flex '>
        <p className='m-0 me-2 py-2' style={{fontSize:'12px'}}>Items por pág</p>
        <Form.Select defaultValue={'2'} className='py-2' aria-label="Default select example" style={{width:'70px'}}>
            <option disabled>1</option>
            <option value="1" onClick={ () => setLimit(5)}>5</option>
            <option value="2" onClick={ () => setLimit(10)}>10</option>
            <option value="2" onClick={ () => setLimit(20)}>20</option>
        </Form.Select>
    </Container>
  )
}

export default LimitSelect