// Level 1
// Exercise 1
console.log("1. Spread operator en arrays: ");
const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [6, 7, 8, 9, 10];
const arrayThree = [];
function arraysGroup(arrayOne, arrayTwo, arrayThree){
    arrayThree = [...arrayOne, ...arrayTwo];
    return console.log(arrayThree)
}
arraysGroup(arrayOne, arrayTwo, arrayThree);

// Exercise 2
console.log("2. Rest operator en funciones: ");
function sumar(...args){
    let total = 0;
    for(let arg of args){
        total += arg;
    }
    return console.log(total);
}
sumar(1, 2, 3, 4);

// Level 2
// Exercise 3
console.log("3. Copiar contenido  de un objeto con spread operator: ");
const object1 = {
    name: "Edgar",
    age: 31,
    genre: "M"
}
const object2 = {}
function mergeObject(object1, object2){
    object2 = {...object1, mascota: "Gato"}
    return console.log(object2);
}
mergeObject(object1, object2);
console.log(object1);

// Exercise 4
console.log("4. Rest operator en destructuring: ");
const arrayElements = [1, "Perro", "Manzana", true, 38];
const [d, e, ...rest] = arrayElements
console.log(d);
console.log(e);
console.log(rest);

// Level 3
// Exercise 5
console.log("5. Spread operator en funciones: ");
function spreadElements(arg1, arg2, arg3){
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
}
const arguments = ["One", "Two", "Three"];
[arg1, arg2, arg3] = arguments
spreadElements(arg1, arg2, arg3);

// Exercise 6
console.log("6. Fusionar objetos con spread operator: ");
const objectElements1 = {
    name: "Edgar",
    age: 31,
    genre: "M"
}
const objectElements2 = {
    country: "Spain",
    address: "Clot"
}
const objectElements3 = {...objectElements1, ...objectElements2};
console.log(objectElements3);