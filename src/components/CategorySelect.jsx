import React from 'react'

import { Form } from 'react-bootstrap'

const CategorySelect = ({setCategoria, errorCategoria}) => {

  const categorySelected = (categoria) => {
    setCategoria(categoria)
  }
  return (
    <Form.Select  onChange={({target}) => categorySelected(target.value)}
     name='categorias' className={errorCategoria ? 'border-danger mb-3' : 'mb-3'} aria-label="Default select example" style={{width:'300px'}}>
        <option >Categoria de tu Producto</option>
        <option value="procesador">Procesador</option>
        <option value="placa madre" >Placa Madre</option>
        <option value="tarjeta de video" >Tarjeta de Video</option>
        <option value="ram">Ram</option>
        <option value="disco duro" >Disco Duro</option>
        <option value="fuente de poder" >Fuente de Poder</option>
        <option value="gabinete" >Gabinete</option>
        <option value="teclado">Teclado</option>
        <option value="mouse" >Mouse</option>
        <option value="pantalla" >Pantalla</option>
        v<option value="audifono">Audífono</option>
    </Form.Select>
  )
}

export default CategorySelect