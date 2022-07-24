
// Farklı JavaScript veri türleri

let firstName = 'Efsane'      // string
let lastName = 'Günyol'        // string
let age = 25                   // number
let job                         // undefined,çünkü değer atanmamış

console.log(typeof 'Efsane')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

console.log("--- string to int ---")
let num = '10'
let numInt = parseInt(num)
// let numInt = Number(num)
// let numInt = +num
console.log(numInt) // 10

console.log("--- string to float ---")

let numF = '9.81'
let numFloat = parseFloat(numF)
// let numFloat=Number(numF)
// let numFloat=+numF
console.log(numFloat) // 9.81

console.log("--- float to int ---")

let num1 = 9.81
let numInt1 = parseInt(num1)

console.log(numInt1) // 9
