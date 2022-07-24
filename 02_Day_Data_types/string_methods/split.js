console.log("-----Split-----")
let stringSplit = '30 Days Of JavaScript'

console.log(stringSplit.split())     // 1 elemanlı array oluşturur. -> ["30 Days Of JavaScript"]
console.log(stringSplit.split(' '))  //Boşluktan böl dediğim için 4 elemanlı array oluşturur. -> ["30", "Days", "Of", "JavaScript"]


//let firstName = 'Efsane'

console.log(firstName.split())    //- > ["Efsane"]
console.log(firstName.split(''))  // Strinler içindeki tüm karakterleri aray haline getirir->  ["E", "f", "s", "a", "n", "e"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  //  Virgülden böl dendiği için 5 elemanlı array oluşturur.2. elemsnın solunda boşluk oluşur. -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) // ', ' virgül ve boşluk bulunmakta bu yüzden elementleri virgülden ayırıp boşluklsuz arrray oluşturuyor. ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]