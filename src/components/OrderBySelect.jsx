import React from 'react'

import { Form } from 'react-bootstrap' 

const OrderBySelect = ({setOrder}) => {
  return (
    <Form.Select aria-label="Default select example" style={{width:'200px'}}>
        <option disabled>Ordenador por</option>
        <option value="ASC" onClick={ () => setOrder("ASC")}>Precio Ascendiente</option>
        <option value="DESC" onClick={ () => setOrder("DESC")}>Precio Descendiente</option>
    </Form.Select>
  )
}

export default OrderBySelect