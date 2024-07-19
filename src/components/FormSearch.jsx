import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react';

import { SearchContext } from '../context/SearchContext';

import { Form, Button } from 'react-bootstrap'

import SearchIcon from '@mui/icons-material/Search';

const FormSearch = () => {
    const { search, setSearch } = useContext(SearchContext)
    const [palabra, setPalabra] = useState('')

    const navigate = useNavigate()

    const goSearch = () => {
        setSearch(palabra)
        navigate(`/search?search=${palabra}`)
    }

    const validar = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault(true)
            goSearch()
        }
    }

     return (
        <Form  className='d-flex align-items-center'>
            <Form.Control className='search' type="search" placeholder="Search" aria-label="Search" style={{width:'100%', height:'50px'}} 
            value={palabra} onChange={({ target }) => setPalabra(target.value)}
            onKeyDown={validar}
            />
            <Button variant="light" className='p-1' style={{height:'50px'}} onClick={goSearch}><SearchIcon /></Button>          
        </Form>
    )
}

export default FormSearch
