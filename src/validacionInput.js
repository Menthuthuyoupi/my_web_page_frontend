const valideKey = (e) => {   
    var code = (e.which) ? e.which : e.keyCode;

    if(code==8 || code>=48 && code<=57) {
        
    } else{
        e.preventDefault()
    }
}

export {
    valideKey
}