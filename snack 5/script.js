console.log('ciao')
/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/
// creazione del elemento ul con dentro li che poi inseriamo nel body
const ulElement = document.createElement('ul')
const liElement = document.createElement("li")
ulElement.appendChild(liElement)
document.body.insertAdjacentElement('afterbegin', ulElement)

// array di oggetti (argomento: bici) 
const bikes = [
    { nome: 'mountbike', peso: 10 },
    { nome: 'Bicicletta da corsa', peso: 15 },
    { nome: 'Bicicletta piegevole', peso: 8 },
    { nome: 'Bicicletta elettrica', peso: 20 },
    { nome: 'Bicicletta urbana', peso: 12 }
];

// variabile per prendere il primo oggetto
let startIndex = 0

// ciclo che scorre per trovare quello con il peso minore
for (const key in bikes) {
    console.log(bikes[key])
    const {peso} = bikes[key]
    console.log(peso)
    if(bikes[startIndex].peso > peso){
        startIndex = key
    }
    
}
console.log(startIndex)
// dopo aver trovato quello col il pesso minore e inglobato in una variabile lo stampiano in pagina
const bikeLessWeight = bikes[startIndex]
const {nome, peso} = bikeLessWeight
liElement.innerHTML = `la bici che pesa dimeno e ${nome} e pesa ${peso}`