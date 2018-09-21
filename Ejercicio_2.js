function arr(n){
for (let i =0; i<=n.length;i++){
    for(let j =0;j<=(n.length-i);j++){
        if(n[j]>n[j+1]){
            let aux =n[j];
            n[j]=n[j+1];
            n[j+1]=aux;
        }
    }
}
return(n);
}