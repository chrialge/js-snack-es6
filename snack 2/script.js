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