// Level 1
// Exercise 1
console.log("1. Crear una promise: ");
const promiseOne = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola mundo");
    }, 2000);
  });
};
console.log(promiseOne());

// Exercise 2
console.log("2. Utilización de una promise: ");
const promiseTwo = new Promise((resolve) => {

    let x = 0;

    if(x == 0){
        setTimeout(() => {
            resolve();
        }, 2000);
    }
});
promiseTwo.then(
  (value) => { console.log("OK! el valor es 0!"); },
);

// Exercise 3
console.log("3. Promise con reject: ");
const promiseThree = new Promise((resolve, reject) => {

    let x = prompt("Ingrese la palabra 'hola'");

    if(x == "hola"){
        setTimeout(() => {
            resolve();
        }, 2000);
    }else{
        setTimeout(() => {
            reject();
        }, 2000);
    }
});
promiseThree.then(
  (value) => { console.log("OK! el valor es correcto!"); },
  (error) => { console.log("Error, el valor no es el correcto"); }
);

// Exercise 4
console.log("4. Async/Await: ");
async function funcPromiseOne() {
    const promiseFour = new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve("Hola mundo desde Async/Await!"); 
        }, 2000);
    });
    console.log(await promiseFour);
}
funcPromiseOne();

// Level 2
// Exercise 5
console.log("5. Gestión de errores Async/Await: ");
async function funcPromiseTwo() {
    const promiseFive = new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve("Hola mundo desde Async/Await Try/Catch!"); 
        }, 3000);
    });
    console.log(await promiseFive);
    try {
        notFunction();
    } catch (error) {
        console.log("No se ha encontrado la funcion")
    }
}
funcPromiseTwo();

// Level 3
// Exercise 6
console.log("6. Promise.all: ");
const promiseSix = Promise.resolve(3);
const promiseSeven = 3;
const promiseEight = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola mundo desde promise.all");
    }, 4000);
});

Promise.all([promiseSix, promiseSeven, promiseEight]).then((values) => {
    console.log(values);
});