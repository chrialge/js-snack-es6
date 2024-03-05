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