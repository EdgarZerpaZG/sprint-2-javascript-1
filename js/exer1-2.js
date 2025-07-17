// Level 1
// Exercise 1
console.log("1. Funcion para comprobar si es apto para conducir: ");
const edad = 25;
function potConducir(edad){
    if(edad >= 18){
        console.log("You can drive");
    }else{
        console.log("You can't drive")
    }
}
potConducir(edad);

// Exercise 2
console.log("2. Funcion para comprobar que número es mayor: ");
const num1 = 5;
const num2 = 10;
if(num1 > num2){
    console.log("num1 is higher");
}else{
    console.log("num2 is lower")
}

// Level 2
// Exercise 3
console.log("3a. Funcion para comprobar si el número es positivo, negativo o es 0: ");
const num3 = 0;
if(num3 > 0){
    console.log("num3 is positive");
}else if(num3 < 0){
    console.log("num3 is negative");
}else{
    console.log("num3 es cero");
}

console.log("3b. Funcion para comprobar que número es el mayor: ");
const a = 6;
const b = 9;
const c = 8;
function trobarMaxim(a, b, c){
    if(a > b && a > c){
        console.log("a is the higher number");
    }else if(b > a && b > c){
        console.log("b is the higher number");
    }else{
        console.log("c is the higher number");
    }
}
trobarMaxim(a, b, c)

// Level 3
// Exercise 4
console.log("4. Funcion para comprobar si los números dentro de un array son par o impar: ");
const arrayNumbers = [1, 2, 3, 4, 5];
function parOImpar(){   
    for(let i = 0; i < arrayNumbers.length; i++){
        if(arrayNumbers[i] % 2 == 0){
            console.log("The number in the position " + i + " is " + arrayNumbers[i] + "  therefore it's even");
        }else{
            console.log("The number in the position " + i + " is " + arrayNumbers[i] + " therefore it's odd");
        }
    }
}
parOImpar()