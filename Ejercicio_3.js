function fib(x){
var a=0;
var b=1;
for(let i=0;i<(x/2);i++){
    console.log(a);
    console.log(b);
    a+=b;
    b+=a;
}
}