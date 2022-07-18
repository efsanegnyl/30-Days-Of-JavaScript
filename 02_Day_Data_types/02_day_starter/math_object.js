console.log("-------------math object------------------")
const PI = Math.PI

console.log(PI)
// En yakın sayıya yuvarlama
// Eğer .5'in altındaysa aşağıya üstündeyse yukarıya yuvarlar. Örn: 4.3 ise 4 yapar 4.51 ise 5 yapar.
console.log(Math.round(PI)) // 3, round değerleri en yakın sayıya yuvarlar
console.log(Math.round(9.81))  // 10
console.log(Math.floor(PI)) // 3, aşağıya yuvarlar
console.log(Math.ceil(PI))  // 4, yukarıya yuvarlar
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, en küçük değeri döndürür
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, en büyük değeri döndürür

const randNum = Math.random() // 0 ile 1 arasında rasgele sayı döndürür
console.log(randNum)

//  0 ve 10 arasında rasgele sayı oluşturalım
const num = Math.floor(Math.random() * 11) // 0 10 arası random sayı oluşturur
console.log(num)

//Mutlak değer alma -Absolute value
console.log(Math.abs(-10))      // 10

//Kare Kök - Square root
console.log(Math.sqrt(100))     // 10
console.log(Math.sqrt(2))       // 1.4142135623730951

//Üs
console.log(Math.pow(3, 2))     // 9
console.log(Math.E)             // 2.718281828459045

// Logaritma

console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

//  Sırasıyla 2 ve 10'un doğal logaritmasını döndürür
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometri
console.log(Math.sin(0))
console.log(Math.sin(60))
console.log(Math.cos(0))
console.log(Math.cos(60))