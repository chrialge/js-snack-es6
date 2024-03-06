/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const persons =[
    {
        nome: 'Christian',
        cognome: 'Algieri',
        eta: 23
    },
    {
        nome: 'Francesco',
        cognome: 'Ferri',
        eta: 17
    },
    {
        nome: 'Leonardo',
        cognome: 'Da Vinci',
        eta: 40
    },
    {
        nome: 'Dante',
        cognome: 'Alghieri',
        eta: 15
    },
    {
        nome: 'Cesare',
        cognome: 'Borgia',
        eta: 10
    },
    {
        nome: 'Nicolo',
        cognome: 'Macchiavelli',
        eta: 39
    },
    {
        nome: 'Ugo',
        cognome: 'Foscolo',
        eta: 70
    }
];

const persona = persons.map((persona) => {
    const nome = persona.nome;
    const cognome = persona.cognome;
    const eta = Number(persona.eta);
    let driveWords;
    if(eta < 18){
        driveWords = "io non posso guidare perche sono minorenne";
    }else if(eta > 65){
        driveWords = 'io non posso guidare perche sono vecchio';
    }else{
        driveWords = 'io posso guidare';
    }
    const markup = `Ciao io sono ${nome} ${cognome}, la mia eta e ${eta} quindi ${driveWords}`;
    return markup;


});
console.log(persona);