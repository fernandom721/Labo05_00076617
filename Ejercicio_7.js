function bis(x){
    if((x%4==0)&&((x%100!=0)||(x%400==0))){
        console.log("el año es bisiesto");
    }else{
        console.log("el año no es bisiesto");
    }
}