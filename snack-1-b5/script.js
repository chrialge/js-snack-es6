console.log('ciao');

//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
//Calcola quanto pesano tutte le zucchine

const cumbers =[
    {nome: 'Zucchine crookneck', peso:  0.3, lunghezza: 20 },
    {nome: 'Zucchine bianche triestine',peso: 0.2 , lunghezza: 14},
    {nome: 'Zucchine pâtisson',peso: 0.1 , lunghezza:  10},
    {nome: 'Zucchine siciliane',peso:  3, lunghezza: 50 },
    {nome: 'Zucchine gialle',peso: 0.2 , lunghezza: 25},
    {nome: 'Zucchine trombetta',peso: 0.4 , lunghezza: 30},
    {nome: 'Zucchine lunghe fiorentine', peso: 0.3 , lunghezza: 30 },
    {nome: 'Zucchine tonde', peso:  0.3, lunghezza: 10},
    {nome: 'Zucchine chiare', peso:  0.2, lunghezza:15 },
    {nome: 'Zucchine verdi', peso:  0.2, lunghezza: 20}
];

console.log(cumbers)

const sum = cumbers.map((zucchina) => {

    let sum = 0;

    cumbers.forEach(zucchina => {
        sum += zucchina.peso
    });
    return sum;
})

console.log(sum)
