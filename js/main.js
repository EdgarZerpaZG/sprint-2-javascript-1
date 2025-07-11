// Level 1
// Exercise 1
const edad = parseInt(prompt("Ingrese su edad"));
function potConducir(edad){
    if(edad >= 18){
        console.log("Can drive");
    }else{
        console.log("Can't drive")
    }
}
potConducir(edad);

// Exercise 2
const num1 = 5;
const num2 = 10;
if(num1 > num2){
    console.log("num1 es mayo");
}else{
    console.log("num2 es mayor")
}

// Level 2
// Exercise 3
const num3 = 0;
if(num3 > 0){
    console.log("num3 es positivo");
}else if(num3 < 0){
    console.log("num3 es negativo");
}else{
    console.log("num3 es cero");
}

const a = 6;
const b = 9;
const c = 8;
function trobarMaxim(a, b, c){
    if(a > b && a > c){
        console.log("a es el mayor número");
    }else if(b > a && b > c){
        console.log("b es el mayor número");
    }else{
        console.log("c es el mayor número");
    }
}
trobarMaxim(a, b, c)

// Level 3
// Exercise 4
const numbers = [1, 2, 3, 4, 5];
function parOImpar(){   
    for(let i = 0; i < numbers.length; i++){
        if(numbers % 2 == 0){
            console.log("El número en la posición " + i + " del array es " + numbers[i] + " por lo tanto es par");
        }else{
            console.log("El número en la posición " + i + " del array es " + numbers[i] + " por lo tanto es impar");
        }
    }
}
parOImpar()