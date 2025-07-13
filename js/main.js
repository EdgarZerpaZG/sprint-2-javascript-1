// Level 1
// Exercise 1
console.log("1. Función para sumar 2 valores: ");
const num1 = 3;
const num2 = 5;

const suma = (num1, num2) =>  console.log(num1 + num2);
suma(num1, num2);

// Exercise 2
console.log("2. Función para mostrar un número random entre 0 y 100: ");
const randomNumber = () => console.log(Math.floor(Math.random() * 101));
randomNumber();

// Exercise 3
console.log("3. Función para mostrar un mensaje a través de valores creados en una clase: ");
persona = new Persona ("Edgar");
console.log(persona.toString());

// Level 2
// Exercise 4
console.log("4. Función para mostrar cada valor dentro de un array: ");
const numbers = [1, 2, 3, 4, 5];
const printNumbers = () => {
    for (let number of numbers){
        console.log(number);
    }
}
printNumbers();

// Exercise 5
console.log("5. Función mostrar un mensaje luego de 3 segundos: ");
setTimeout(() => {
  console.log("Este mensaje aparece 3 segundos despúes de cargar el DOM.");
}, "3000");