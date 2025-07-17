// Level 1
// Exercise 1
console.log("1. Callback básico: ");
const name1 = "Edgar";
function procesar(name1, callback){
    console.log(name1);
    callback(name1);
}
procesar(name1, function(name1){
    console.log("Saludos de " + name1 + " desde el callback");
});

// Exercise 2
console.log("2. Callback con operaciones matemáticas: ");
const nombre1 = "Edgar";
const nombre2 = "Zerpa";
function calculadora(nombre1, nombre2, calc){
    calc(nombre1, nombre2);
}
calculadora(nombre1, nombre2, function(nombre1, nombre2){
    console.log("Mi nombre es " + nombre1 + " " + nombre2);
})

// Level 2
// Exercise 3
console.log("3. Callback en funciones asíncronas: ");
const name2 = "Edgar";
function esperarSaludo(name2, esperar){
    esperar(name2);
}
esperarSaludo(name2, function(name2){
    setTimeout(() => {
        console.log("Soy " + name2 +  " y envío un saludo!");
    }, 2000);
});

// Exercise 4
console.log("4. Callback con array: ");
const names = ["Edgar", "Carlos", "Luis"];
function procesarElementos(names, elements){
    elements(names);
}
procesarElementos(names, function(names){
    names.forEach(element => {
        console.log(element)
    });
});

// Level 3
// Exercise 5
console.log("5. Callback transformar a mayúscula: ");
const sentencia = "Hola mundo!";
function procesarCadena(sentencia, cadena){
    cadena(sentencia);
}
procesarCadena(sentencia, function(sentencia){
    console.log(sentencia.toUpperCase());
})