console.log('ciao');

/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


const squadTeam = [
    {nome: 'Atalanta', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Inter', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Milan', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Juventus', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Roma', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Lazio', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Napoli', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Fiorentina', puntiFatti: 0, falliSubiti: 0},

]
const numberRandom = getRndInteger(0,50)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
console.log(numberRandom);

