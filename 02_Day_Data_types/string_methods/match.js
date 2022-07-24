
let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match(/ain/g);
console.log(result);

let stringMatch = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(stringMatch.match('love')) //

let pattern = /love/gi
console.log(stringMatch.match(pattern))

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// + bir veya daha fazla basamaklı sayı anlamına gelir,
// ondan sonra g varsa global demektir, her yerde ara.

console.log(txt.match(regEx))  //
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]