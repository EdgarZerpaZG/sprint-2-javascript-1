// Func Suma
const num1 = parseInt(prompt("Ingrese el primer número"));
const num2 = parseInt(prompt("Ingrese el segundo número"));

function suma(num1, num2){
    return num1 + num2
}
document.getElementById("suma").innerHTML = suma(num1, num2);

// Func arrow with random number
const randomNumber = () => Math.floor(Math.random() * 101);
document.getElementById("random-number").innerHTML = randomNumber();

// Clase with arrow func
persona = new Persona (prompt("Ingrese su nombre"));

document.getElementById("saludar").innerHTML = persona.toString();