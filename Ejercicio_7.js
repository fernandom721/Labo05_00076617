function bis(x){
    if((x%4==0)&&((x%100!=0)||(x%400==0))){
        return("el año es bisiesto");
    }else{
        return("el año no es bisiesto");
    }
}