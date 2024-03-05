/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/
const cars = [
    {
        marca: 'wolsvagen',
        modello: 'polo',
        alimentazione: 'benzina'
    },
    {
        marca: 'pegeout',
        modello: '206',
        alimentazione: 'diesel'
    },
    {
        marca: 'wolsvagen',
        modello: 't-croos',
        alimentazione: 'eletrico'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'metano'
    },
    {
        marca: 'citroen',
        modello: 'c1',
        alimentazione: 'benzina'
    },
    {
        marca: 'opel',
        modello: 'corsa',
        alimentazione: 'gpl'
    },
    {
        marca: 'lancia',
        modello: 'delta',
        alimentazione: 'benzina'
    },
    {
        marca: 'seat',
        modello: 'ibiza',
        alimentazione: 'diesel'
    },
    {
        marca: 'lancia',
        modello: 'musa',
        alimentazione: 'diesel'
    },
    {
        marca: 'wolsvagen',
        modello: 'polo',
        alimentazione: 'gpl'
    },
]
const carDiesel = cars.filter((car) => car.alimentazione === 'diesel')
console.log(carDiesel)

const carBenzina = cars.filter((car) => car.alimentazione === 'benzina')
console.log(carBenzina)

const carOther = cars.filter((car) => car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel')
console.log(carOther)