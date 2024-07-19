import React from 'react'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useNavigate } from 'react-router-dom';

import { Button} from 'react-bootstrap';

const NavNextPrevious = ({page, setPage, next, previous, total, limit}) => {
    const navigate = useNavigate()

    const goNext = () => {
        navigate(next)
    }
    const goPrevious = () => {
        navigate(previous)
    }

    return (
        <>
            <div className='d-flex'>
                <p className='m-0 me-3 py-2' style={{fontSize:'12px'}}>{limit*(page-1)+1}-{limit*page > total ? total : limit*page} de {total}</p>
                <nav className="me-auto d-flex">
                    <Button variant="outline-info" className={`page-item me-1 rounded-circle ${!previous ? "aria-disabled" : ""}`} 
                    onClick={() => { if (previous) { setPage(page - 1); goPrevious()}}} style={!previous ? { cursor: "not-allowed" } : { cursor: "pointer" }}>
                        <a>
                            <KeyboardArrowLeftIcon fontSize='large' />
                        </a>
                    </Button>

                    <Button variant="outline-info" className={`page-item me-1 rounded-circle ${!next ? "aria-disabled" : ""}`}
                    onClick={() => { if (next) { setPage(page + 1); goNext()}}} style={!next ? { cursor: "not-allowed" } : { cursor: "pointer" }}>
                        <a>
                            <KeyboardArrowRightIcon fontSize='large' />
                        </a>
                    </Button>
                </nav>
            </div>
        </>
  )
    
}

export default NavNextPrevious