// Level 1
// Exercise 1
console.log("1. forEach: ");
const noms1 = ['Anna', 'Bernat', 'Clara'];
noms1.forEach((element) => console.log(element));

// Exercise 2
console.log("2. for-of: ");
const noms2 = ['Anna', 'Bernat', 'Clara'];
for(nom2 of noms2){
    console.log(nom2);
}

// Exercise 3
console.log("3. filter: ");
const noms3 = [1, 2, 3, 4, 5, 6];
const noms3Par = noms3.filter((noms) => noms % 2 == 0);
console.log(noms3Par);

// Level 2
// Exercise 4
console.log("4. for-in: ");
const obj = { 
    nom: "Ona", 
    edat: 25, 
    ciutat: 'Barcelona'
};
for(const data in obj){
    console.log(`${data}: ${obj[data]}`);
}

// Exercise 5
console.log("5. for-of with break: ");
const noms4 = [1, 2, 3, 4, 5, 6];
for(const nom4 of noms4){
    if(nom4 == 5){
        break;
    }
    console.log(nom4)
}

// Level 3
// Exercise 6
console.log("6. For-of index: ");
const noms5 = ['Anna', 'Bernat', 'Clara'];
for(const nom5 of noms5){
    console.log("El nombre " + nom5 + " está en la posición " + noms5.indexOf(nom5));
}