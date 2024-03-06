//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)


const word = 'ciao'

console.log(reverseword(word))

function reverseword(word){

    const wordsplit = word.split('') 
    const wordReverse = wordsplit.reverse().join("")  
    return wordReverse;
}

