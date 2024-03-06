console.log('ciao')
/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/
const bikes = [
    { nome: 'mountbike', peso: 10 },
    { nome: 'Bicicletta da corsa', peso: 15 },
    { nome: 'Bicicletta piegevole', peso: 8 },
    { nome: 'Bicicletta elettrica', peso: 20 },
    { nome: 'Bicicletta urbana', peso: 12 }
];
let {peso} = bikes
console.log(peso)

let startIndex = 0
for (const key in bikes) {
    console.log(bikes[key])
    const peso = bikes[key].peso
    console.log(peso)
    if(bikes[startIndex].peso > peso){
        startIndex = key
    }
    
}
console.log(startIndex)
const bikeLessWeight = bikes[startIndex]
console.log(bikeLessWeight)