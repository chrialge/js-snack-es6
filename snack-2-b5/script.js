// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const cumbers =[
    {nome: 'Zucchine crookneck', peso:  0.3, lunghezza: 20 },
    {nome: 'Zucchine bianche triestine', peso: 0.2 , lunghezza: 14},
    {nome: 'Zucchine pâtisson', peso: 0.1 , lunghezza:  10},
    {nome: 'Zucchine siciliane', peso:  3, lunghezza: 50 },
    {nome: 'Zucchine gialle', peso: 0.2 , lunghezza: 25},
    {nome: 'Zucchine trombetta', peso: 0.4 , lunghezza: 30},
    {nome: 'Zucchine lunghe fiorentine', peso: 0.3 , lunghezza: 30 },
    {nome: 'Zucchine tonde', peso:  0.3, lunghezza: 10},
    {nome: 'Zucchine chiare', peso:  0.2, lunghezza:15 },
    {nome: 'Zucchine verdi', peso:  0.2, lunghezza: 20}
];


const zucchinaBigger = cumbers.filter(zucchina =>{
    if (zucchina.lunghezza > 15){
        return true
    };
});
const zucchinaSmaller = cumbers.filter(zucchina =>{
    if(zucchina.lunghezza <=15){
        return true;
    };
});

let pesoZucchinaSmaller = 0
zucchinaSmaller.forEach(zucchina => pesoZucchinaSmaller += zucchina.peso)

let pesoZucchinaBigger = 0
zucchinaBigger.forEach(zucchina => pesoZucchinaBigger += zucchina.peso)
console.log(zucchinaSmaller, pesoZucchinaSmaller );
console.log( zucchinaBigger, pesoZucchinaBigger)