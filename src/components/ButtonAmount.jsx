import React from 'react'
import { useState, useContext } from 'react'

import { TotalPayContext } from '../context/TotalPayContext'

import { Button } from 'react-bootstrap'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ButtonAmount = ({precio}) => {
    const [count, setCount] = useState(1)
    const {total,setTotal} = useContext(TotalPayContext)

    const incrementar = ()=>{
        setCount(count+1)
        setTotal(total+precio)
    }
    const decrementar = ()=>{
        if(count >= 1){
            setCount(count-1)
            setTotal(total-precio)
        }            
    }
  return (
    <div className='d-flex'>
        <p className='my-2 me-2'>{`$ ${precio*count}`}</p>           
        <Button variant='danger' className='py-0 px-2' onClick={decrementar}><RemoveCircleIcon /></Button>
        <p className='my-2 mx-2'>{count}</p>
        <Button className='py-0 px-2' onClick={incrementar}><AddCircleIcon /></Button>
    </div>
  )
}

export default ButtonAmount