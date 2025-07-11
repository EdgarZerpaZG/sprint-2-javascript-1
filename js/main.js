// Level 1
// Exercise 1
const num1 = 3;
const num2 = 5;

function suma(num1, num2){
    return num1 + num2
}
document.getElementById("suma").innerHTML = suma(num1, num2);

// Exercise 2
const randomNumber = () => Math.floor(Math.random() * 101);
document.getElementById("random-number").innerHTML = randomNumber();

// Exercise 3
persona = new Persona ("Edgar");

document.getElementById("saludar").innerHTML = persona.toString();

// Level 2
// Exercise 4
const numbers = [1, 2, 3, 4, 5];
const printNumbers = () => {
    for (let number of numbers){
        console.log(number);
    }
}
printNumbers();

// Exercise 5
setTimeout(() => {
  console.log("Este mensaje aparece 3 segundos despúes de cargar el DOM.");
}, "3000");