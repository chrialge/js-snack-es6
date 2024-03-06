console.log('ciao');

/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// creazione del elemento ul con dentro li che poi inseriamo nel body
const ulElement = document.createElement('ul')
document.body.insertAdjacentElement('afterbegin', ulElement)

// array delle squadre di calcio
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

// funzione che produce numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//funzione che inserice i numeri random alle proprieta falli subiti e punti fatti
squadTeam.forEach(squad =>{
    squad.puntiFatti = getRndInteger(0,50)
    squad.falliSubiti = getRndInteger(0,50)
});
console.log(squadTeam)

//creo una nuova array prendendo i le proprieta nome e puntifatti di squadteam
const newArray = squadTeam.map(squad => {
    const{nome, puntiFatti} = squad
    const liElement = document.createElement("li")
    ulElement.appendChild(liElement)
    liElement.insertAdjacentHTML('beforeend', `${nome} ${puntiFatti}`)
    const team = {nome, puntiFatti}
    return team
})

console.log(newArray)
