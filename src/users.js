const postUser = async (email, password) => {
    const response = await fetch(`http://localhost:3000/users`,
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
    const response = await fetch(`http://localhost:3000/login`,
        {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        }
    )
    const result = await response.json()
    return result    
}

const putYourPhoto = async (id, imagen) => {
    const response = await fetch(`http://localhost:3000/users`,
        {
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, imagen: imagen})
        }
    )
    const result = await response.json()
    return result
}

export {
    postUser,               //register                  ->POST      '/users'                 **                       
    postLogin,              //login                     ->POST      '/login'                 **
    putYourPhoto            //perfil-put                ->PUT       '/users/:id'             **
}