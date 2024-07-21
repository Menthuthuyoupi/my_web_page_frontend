import React from 'react'

import { Form } from 'react-bootstrap' 

const OrderBySelect = ({setOrder}) => {
  const orderSelected = (order)=> {
    setOrder(order)
  }
  return (
    <Form.Select onChange={({target}) => orderSelected(target.value)} aria-label="Default select example" style={{width:'200px'}}>
        <option disabled>Ordenador por</option>
        <option value="ASC">Precio Ascendiente</option>
        <option value="DESC">Precio Descendiente</option>
    </Form.Select>
  )
}

export default OrderBySelect