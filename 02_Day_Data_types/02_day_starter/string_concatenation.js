console.log("-----String Concatenation-----")
let space = ' '           // an empty space string
let firstName = 'Efsane'
let lastName = 'Günyol'
let country = 'Türkiye'
let city = 'İstanbul'
let language = 'JavaScript'
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// Toplama operatörünü kullanarak birleştirme
let fullName = firstName + space + lastName
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log(personInfoOne)

// Birleştirme: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 -
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I teach ${language}.`
console.log("dede",personInfoTwo)
console.log(personInfoThree)