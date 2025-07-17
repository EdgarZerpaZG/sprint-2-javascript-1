// Level 1
// Exercise 1
console.log("1. Map: ");
const array1 = [1, 2, 3, 4];
const arrayNew1 = array1.map(function(elements){
    return elements ** 2;
});
console.log(arrayNew1);

// Exercise 2
console.log("2. Filter: ");
const array2 = [1, 2, 3, 4];
const arrayNew2 = array2.filter((arrayMini2) => arrayMini2 % 2 == 0);
console.log(arrayNew2);

// Exercise 3
console.log("3. Find: ");
const array3 = [1, 10 , 8, 11];
const arrayNew3 = array3.find((arrayMini3) => arrayMini3 >= 10);
console.log(arrayNew3);

// Exercise 4
console.log("4. Reduce: ");
const array4 = [13, 7, 8, 21];
const valorInicial = 0;
const total = array4.reduce((acumulador, actualValor) => acumulador + actualValor, valorInicial);
console.log(total);

// Level 2
// Exercise 5
console.log("5. Funcion con todo lo anterior: ");
const array5 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
const arrays = (array5) => {
    let arrayNew5 = array5.filter((arrayMini5) => arrayMini5 >= 10);
    console.log(arrayNew5);
    let arrayNewNew5 = arrayNew5.map((arrayNewMini5) => arrayNewMini5 * 2);
    console.log(arrayNewNew5);
    let arrayActualInicial = 0;
    let arrayNewNewNew5 = arrayNewNew5.reduce((arrayAcumulador, arrayActualValor) => arrayAcumulador + arrayActualValor, arrayActualInicial)
    console.log(arrayNewNewNew5);
    console.log(arrayNewNewNew5 * 2);
    return arrayNew5, arrayNewNew5, arrayNewNewNew5;
}
arrays(array5);

// Level 3
// Exercise 6
console.log("6. Every/Some: ");
const array6 = [11, 12, 13, 14];
const arrayEvery6 = array6.every((arrayMini6) => arrayMini6 > 10);
const arraySome6 = array6.every((arrayMini6) => arrayMini6 > 10);
console.log(arrayEvery6);
console.log(arraySome6);