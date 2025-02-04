const getProductosHome = async (categoria, setProductos) => {
    const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/home?categoria=${categoria}`
    )
    const { productos, total} = await response.json()
    if(total !== 0 && total){
        setProductos(productos)
    }else{
        setProductos([])
    }   
}

const getProductos = async (categoria, page = 1, order='ASC', limit = 10, setProductos, setTotalPages, setNext, setPrevious, setTotal) => {
    const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/categorias?categoria=${categoria}&page=${page}&limit=${limit}&order=${order}`
    )
    const { results, total_pages, next, previous, total } = await response.json()
    if(total !== 0 && total){
        setTotal(total)
        setTotalPages(total_pages) 
        setNext(next)
        setPrevious(previous)
        setProductos(results)
    }   
}

const getProductosSearch = async (page = 1, order='ASC', limit = 10, search = '', setProductos, setTotalPages, setNext, setPrevious, setTotal) => {
    const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/search?search=${search}&page=${page}&limit=${limit}&order=${order}`
    )
    const { results, total_pages, next, previous, total } = await response.json()
    if(total !== 0 && total){
        setTotal(total)
        setTotalPages(total_pages) 
        setNext(next)
        setPrevious(previous)
        setProductos(results)
    }else{
        setTotal(0)
    }
}

const getProductobyId = async (id, setProducto) => {
    const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/productos/${id}`
    )
    const productobyId = await response.json()
    setProducto(productobyId)
}


const getProductosIdUsuario = async (page = 1, order='ASC', limit = 10, id_usuario, setProductos, setTotalPages, setNext, setPrevious, setTotal) => {
    const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/productosusuario?id_usuario=${id_usuario}&page=${page}&limit=${limit}&order=${order}`
    )
    const { results, total_pages, next, previous, total } = await response.json()
    if(total !== 0 && total){
        setTotal(total)
        setTotalPages(total_pages) 
        setNext(next)
        setPrevious(previous)
        setProductos(results)
    }else{
        setProductos([])
    }
}

const postProducto = async (id_usuario, nombre, imagen, descripcion, precio, categoria, cantidad, token) => {
    const code = 'Bearer ' +  token
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/productos`,
        {
            method:'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': code },
            body: JSON.stringify({ id_usuario: id_usuario, nombre: nombre, imagen: imagen, descripcion: descripcion, precio: precio, categoria: categoria, cantidad: cantidad })
        }
    )
    const result = await response.json()
    return result
}

const deleteProducto = async (id, token) => {
    const code = 'Bearer ' + token
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/productos/${id}`,
        {
            method:'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': code },
            body: JSON.stringify({})
        }
    )
}

const putProduct = async (id, precio, cantidad, descripcion, url_imagen, nombre, token) => {
    const code = 'Bearer ' + token
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/productos/${id}?precio=${precio}&cantidad=${cantidad}&descripcion=${descripcion}&url_imagen=${url_imagen}&nombre=${nombre}`,
        {
            method:'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': code },
            body: JSON.stringify({})
        }
    )
}

const getLikes = async (id, setLikes) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/likes/${id}`)
    const likes = await response.json()
    setLikes(likes.likes)
}

const putLikes = async (id, id_usuario, setLikes, token) => {
    const code = 'Bearer ' + token
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/likes/${id}`,
        {
            method:'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': code },
            body: JSON.stringify({id_usuario: id_usuario})
        }
    )
    const likes = await response.json()
    setLikes(likes.likes)
}

const postMisCompras = async (id, id_usuario, imagen, nombre, cantidad, token) => {
    const code = 'Bearer ' + token
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/miscompras/${id}`,
        {
            method:'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': code },
            body: JSON.stringify({id_usuario: id_usuario, nombre: nombre, imagen: imagen , cantidad: cantidad})
        }
    )
    const { message } = await response.json()
    return message
}

const getMisCompras = async (id, setMisCompras) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/miscompras/${id}`)

    const result = await response.json()
    setMisCompras(result)
}

export {                            //                          METODO      RUTA                                       TOKEN
    getProductos,                   //productos-categorias      ->GET       '/categorias'            **     publica
    getProductosHome,               //productos-home            ->GET       '/home'                  **     publica
    getProductosSearch,             //productos-search          ->GET       '/search'                **     publica
    getProductosIdUsuario,          //mispublicaciones-get      ->GET       '/productosusuario'      **     PRIVADA     xx             
    getProductobyId,                //productos-id-get          ->GET       '/producto/:id'          **     publica
    postProducto,                   //publicar                  ->POST      '/productos'             **     PRIVADA     **
    deleteProducto,                 //mispublicaciones-delete   ->DELETE    '/productos/:id'         **     PRIVADA     **
    putProduct,                     //mispublicaciones-put      ->PUT       '/productos/:id'         **     PRIVADA     **
    putLikes,                       //likes-id-put              ->PUT       '/likes/:id'             **     PRIVADA     **
    getLikes,                       //likes-id-get              ->GET       '/likes/:id'             **     publica
    postMisCompras,
    getMisCompras
}