/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/
const array = [
    'cIAO',
    'pluto',
    'pAPERINO',
    'GANDALF'
]

const secondArray = array.map((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
} )
console.log(secondArray)