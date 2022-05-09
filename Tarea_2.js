const fs =require('fs')
fs.readFile('/Users/jesusaguirre/POO/Mini Tarea Poo/numeros.txt',"utf8",(error,data) => {
    if (error) {
        console.error(err);
        return;
    };
let join_function=Fibonacci(data);
console.log(join_function);
});

function Fibonacci(n){
    if (n==0){
        return 0;
    }
    if (n==1){
        return 1;
    }
    else{
        return Fibonacci(n-1)+Fibonacci(n-2);
    }
}