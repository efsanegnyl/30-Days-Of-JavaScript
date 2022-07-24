let stringIncludes = '30 Days Of JavaScript'

console.log(stringIncludes.includes('Days'))     // true
console.log(stringIncludes.includes('days'))     // false - birebir arama yapar
console.log(stringIncludes.includes('Script'))   // true
console.log(stringIncludes.includes('script'))   // false
console.log(stringIncludes.includes('java'))     // false
console.log(stringIncludes.includes('Java'))     // true

let countryIncludes = 'Finland'

console.log(countryIncludes.includes('fin'))     // false
console.log(countryIncludes.includes('Fin'))     // true
console.log(countryIncludes.includes('land'))    // true
console.log(countryIncludes.includes('Land'))    // false