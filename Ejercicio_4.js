function bin(x){
    var cont="";
    while(x>0){
        cont=(x%2)+cont;
        x=Math.floor(x/2);
    }
    return(cont);
}