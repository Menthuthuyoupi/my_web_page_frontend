const postUser = async (email, password) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`,
        {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password})
        }
    )
    const result = await response.json()
    return result
}

const postLogin = async (email, password) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`,
        {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        }
    )
    const result = await response.json()
    return result    
}

const putYourPhoto = async (id, imagen, setLoggedIn) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/photo`,
        {
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, imagen: imagen})
        }
    )
    const result = await response.json()
    setLoggedIn(result)
}

const putNewPassword = async (id, newPassword, setMsg, token) => {
    const moneda = `Bearer ${token}`
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/password`,
        {
            method:'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': moneda },
            body: JSON.stringify({ id: id, newPassword: newPassword })
        }
    )
    const { message } = await response.json()
    setMsg(message)
}

const putYourInfo = async (id, nombre, prefijo, telefono, birthdate, setNombre, setPrefijo, setTelefono, setBirthdate, token ) => {
    const moneda = `Bearer ${token}`
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}?nombre=${nombre}&prefijo=${prefijo}&telefono=${telefono}&birthdate=${birthdate}`,
        {
            method:'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': moneda },
            body: JSON.stringify({})
        }
    )
    const result = await response.json()
    setNombre(result.nombre)
    setPrefijo(result.prefijo)
    setTelefono(result.telefono)
    setBirthdate(result.birthdate)
}

const deleteYourAcc = async (id, token, setLoggedIn) => {
    const moneda = `Bearer ${token}`
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`,
        {
            method:'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': moneda },
            body: JSON.stringify({})

        }
    )
    const result = await response.json()
    setLoggedIn(result)
}

export {
    postUser,               //register                  ->POST      '/users'                 **                       
    postLogin,              //login                     ->POST      '/login'                 **
    putYourPhoto,           //perfil-put                ->PUT       '/users/:id'             **
    putNewPassword,
    putYourInfo,
    deleteYourAcc
}