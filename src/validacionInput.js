const valideKey = (e) => {   
    var code = (e.which) ? e.which : e.keyCode;

    if(code==8 || code>=48 && code<=57) {
        console.log('solo se acepta numeros y el back')  
    } else{
        console.log('no se aceptan otros digitos q no sean numeros')
        e.preventDefault()
    }
}

export {
    valideKey
}