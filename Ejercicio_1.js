function palabra(param) {
    if (param==param.split("").reverse().join("")){
        return("Es Palindromo");
    }else{
        return("No es Palindromo");
    }
}