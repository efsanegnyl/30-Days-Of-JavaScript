let stringEnds = 'Love is the most powerful feeling in the world'

console.log(stringEnds.endsWith('world'))         // true
console.log(stringEnds.endsWith('love'))          // false
console.log(stringEnds.endsWith('in the world')) // true

let countryEnds = 'Finland'

console.log(countryEnds.endsWith('land'))         // true
console.log(countryEnds.endsWith('fin'))          // false
console.log(countryEnds.endsWith('Fin'))          //  false