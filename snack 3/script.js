/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/
const animals = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasionadi', classe: 'uccelli' },
  { nome: 'delfino', famiglia: 'delphinade', classe: 'mammiferi' },
  { nome: 'pinguino', famiglia: 'sfeniscidi', classe: 'uccelli' },
  { nome: 'foca', famiglia: 'focidii', classe: 'mammiferi' },
  { nome: 'balena', famiglia: 'balenidi', classe: 'pesci' },  
  { nome: 'rana toro', famiglia: 'ranidi', classe: 'anfibi' },
  { nome: 'chiodino', famiglia: 'physalacriaceae', classe: 'fungo' }
];

console.log(animals)


// forma estesa
// const mammiferi = animals.filter(function(animal){
//   if(animal.classe === 'mammiferi'){
//     return true
//   }
// })
// console.log(mammiferi)

// forma contratta
const mammiferi = animals.filter((animal) => animal.classe === 'mammiferi' )
console.log(mammiferi)