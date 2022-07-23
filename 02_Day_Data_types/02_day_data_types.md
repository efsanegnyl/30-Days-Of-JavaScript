<div align="center">
  <h1> 30 Günde  JavaScript: Veri Tipleri</h1>
</div>

[<< 1. Gün](../readMe.md) | [3. Gün >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)
- [📔 2.Gün](#-2-gun)
  - [Veri Tipleri](#veri-tipleri)
    - [Primitive Veri Tipleri](#primitive-veri-tipleri)
    - [Non-Primitive Veri Tipleri](#non-primitive-veri-tipleri)
  - [Numbers](#numbers)
       - [Number Veri Tiplerini Bildirme](#number-veri-tiplerini-bildirme)
       - [Matematik Objesi (Math Object)](#matematik-objesi-(math-object))
       - [Rastgele Sayı Üretme ](#rastgele-sayı-üretme)
  - [String](#strings)
       - [String  Birleştirme](#string-birleştirme)
         - [Toplama Operatörünü Kullanarak Birleştirme
           ](#string-index-of)
         - [Uzun Değişmez Stringler](#uzun-değişmez-stringler)
         - [String'lerdeki Kaçış Dizileri](#stringlerdeki-kaçış-dizileri)
         - [Template Literals (Template Strings)](#stringlerdeki-kaçış-dizileri)
    - [String Methods](#string-methods)



# 📔 2. Gun

## Veri Tipleri
Önceki bölümde,  veri tiplerinden biraz bahsetmiştik. Veri veya değerlerin veri tipleri vardır. Veri tipleri verilerin özelliklerini tanımlar.
Veri tipleri 2'ye ayrılabilir.

   1. Primitive Veri Tipleri
   2. Non-Primitive Veri Tipleri


### Primitive Veri Tipleri

JavaScript'te primitive veri tipleri şunları içerir

1. Number  - Integer(tam sayılar) , Float(ondalık sayılar)
2. String - Tek tırnak, çift alıntı veya ters tırnak arasındaki veriler
3. Boolean  - true(1) veya false(0) 
4. Null   - Null(Boş) değer
5. Undefined  - undefined(tanımsız) değer .Değer atanmayan değişken .
  ````
   Örn let x;  //x=undefined;
   ````
6. Symbol - Sembol türü, nesneler için benzersiz tanımlayıcılar oluşturmak için kullanılır.

JavaScript'te non-primitive veri tipleri şunları içerir

  1. Object - nesne türü, nesne oluşturmak için kullanılır.
  2. Array - dizi türü, dizi oluşturmak için kullanılır.

Şimdi, primitive ve non-primitive veri tiplerini tam olarak ne anlama geldiğini görelim.
Primitive veri tipleri , değişmez değiştirilemez veri tipleridir.Primitive veri türü oluşturulduktan sonra onu değiştiremeyiz.

Örnek:
```js
let word = " JavaScript";
```
Word değişkeninde saklanan string'i   değiştirmeye çalışırsak, JavaScript bir hata vermelidir.Tek, çift veya ters tırnak arasındaki herhangi bir veri türü string veri türüdür.

```js
word[0] = 'Y'
```
Bu ifade, değişken word'de saklanan string'i değiştirmez.Yani stringlerin değiştirilemez veya başka bir deyişle değişmez olduğunu söyleyebiliriz.Primitive veri türleri değerlerine göre karşılaştırılır.
Farklı veri değerlerini karşılaştıralım.Aşağıda örneklere bakalım 
```js
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo);  //true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py) //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff);//false

```

### Non-Primitive Veri Tipleri

Non-primitive veri tipleri, değiştirilebilir veya düzenlenebilir.Non-primitive  veri türlerinin değerini, oluşturulduktan sonra değiştirebiliriz.Bir array(_dizi_) oluşturarak görelim.
Array, köşeli parantez içindeki veri değerlerinin bir listesidir.Diziler aynı veya farklı veri türlerini içerebilir
Dizi değerleri indexlerine göre referans alınır.JavaScripte dizi indeksi sıfırdan başlar.Yani, bir dizinin ilk elemanı sıfır indeksinde, ikinci eleman bir indekste ve üçüncü eleman indeks ikide bulunur. ...

```js
let nums=[1,2,3]
nums[0]=10

console.log("nums",nums) // nums [10,2,3]
```
Gördüğünüz gibi, non-primitive bir veri türü olan dizi, değişkendir. Non-primitive veri türleri değere göre karşılaştırılamaz.
Non-primitive iki veri türü aynı özelliklere ve değerlere sahip olsa bile, kesinlikle eşit değildirler.

```js
let number = [1, 2, 3]
let numbers = [1, 2, 3]

console.log("number",number == numbers) // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}


console.log("user",userOne == userTwo) // false
```

Temel kural, non-primitive veri türlerini karşılaştırmıyoruz.Dizileri (array), fonksiyonlerı (function)  veya nesneleri (objects)  karşılaştırmayın.
Non-primitive değerler, değer yerine referans ile karşılaştırıldıkları için referans türleri olarak adlandırılır.İki nesne, yalnızca aynı temel nesneye atıfta bulunuyorlarsa kesinlikle eşittir.
```js
let nums1 = [1, 2, 3]
let numbers1 = nums1

console.log("nums",nums1 == numbers1) // true

let userThree = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
}

let userFour = userThree

console.log(userThree == userFour)  // true
```

Eğer primitive ve non-primitive veri tipleri arasındaki farkı anlamakta zorlanıyorsan , tek değilsin.
Sakin olun ve bir sonraki bölüme geçin ve bir süre sonra geri gelmeye çalışın. Şimdi sayı türüne göre veri türlerine başlayalım

### Numbers

Numbers, tüm aritmetik işlemleri yapabilen tam sayılar ve ondalık değerlerdir. Sayılarla ilgili bazı örnekler görelim.

### Number Veri Tiplerini Bildirme
```js
let age = 35
const gravity = 9.81  // değişmeyen değerler için const kullanıyoruz, m/s2 cinsinden yerçekimi sabiti
let mass = 72         //
const pi = 3.14       // pi  geomaetrik sabiti

// Örnekler
const boilingPoint = 100 // santigrat cinsinden suyun kaynama sıcaklığı
const bodyTemp = 37      // oC sabit olan ortalama insan vücut sıcaklığı

console.log(age, gravity, mass, pi, boilingPoint, bodyTemp)
```

### Matematik Objesi (Math Object)

JavaScript'te Math Object, sayılarla çalışmak için birçok yöntem sağlar.
```js
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
```


#### Rastgele Sayı Üretme

JavaScript'te Math nesnesi random() methodu 0 ile 0,999999999 arasında bir sayı üretir

```js
let randomNum = Math.random() // 0 ile 0.999999999 arasında bir sayı üretir
```

Şimdi, 0 ile 10 arasında rastgele bir sayı üretmek için random() methodu'nu nasıl kullanabileceğimizi görelim:

```js
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11
console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10
```

### Strings
Stringler tek tırnak, çift tırnak, backslash arasındaki metinlerdir.
Bir string bildirmek için bir değişken adına, atama operatörüne, tek tırnak, çift tırnak veya backslash'a içinde  bir değere ihtiyacımız var. 
Bazı string örnekleri görelim:

```js
let space = ' '           // an empty space string
let firstName = 'Efsane'
let lastName = 'Günyol'
let country = 'Türkiye'
let city = 'İstanbul'
let language = 'JavaScript'
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
```
### String Birleştirme

İki veya daha fazla stringi birbirine bağlamaya birleştirme denir.
Yukarda bulunan string  örneklerini kullanarak:


```js
let fullName = firstName + space + lastName; // birleştirme, iki string'i bir araya getirme.
console.log(fullName); // Efsane Günyol
```
String'leri farklı şekildede birleştirebiliriz.

#### Toplama Operatörünü Kullanarak Birleştirme

Ekleme operatörü kullanarak birleştirme eski bir yöntemdir. Bu birleştirme yöntemi sıkıcı ve hataya açıktır. Bu şekilde nasıl birleştirileceğini bilmek iyidir, ancak ES6 şablon dizelerini kullanmanızı şiddetle tavsiye ederim (daha sonra açıklanacaktır).

```js
// Farklı veri türlerini oluşturma
let space = ' '           // an empty space string
let firstName = 'Efsane'
let lastName = 'Günyol'
let country = 'Türkiye'
let age = 25
let city = 'İstanbul'
let language = 'JavaScript'
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 toplama operatörü ile değişkenleri birleştiriyor
console.log(personInfoOne)
```

#### Uzun Değişmez Stringler

Stringler tek bir karakter, paragraf yada sayfa olabilir. String uzunluğu çok büyükse tek bir satıra sığmayabilir. String'in bir sonraki satırda devam edeceğini belirtmek için her satırın sonunda ters slash ( \ ) kullanabiliriz.  
**Örnek:**

```js

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)
```

#### Stringlerdeki Kaçış Dizileri

JavaScript ve diğer programlama dillerinde \ ardından bazı karakterler bir kaçış dizisidir. En yaygın kaçış karakterlerini görelim:

- \n: Yeni satır
- \t: Tab, 8 boşluk anlamına gelir
- \\: Back slash
- \': Tek tırnak (')
- \": Çift tırnak (")

```js
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // alt satıra geç
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // backslash sembolü
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
```

console çıktısı

```
I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020
```

### Template Literals (Template Strings)

Template literals oluşturmak için backtik kullanırız. Verileri bir template string içine ifade olarak ekleme  yapabiliriz. Verileri  eklemek  için, ifadeyi bir $ işareti ile başlayan bir küme parantezinin({}) içine alırız. Aşağıdaki syntax'a bakın.

```js 
//Syntax
`String literal text`
`String literal text ${expression}`
 ```
Örnek:1
```js 
console.log(`The sum of 2 and 3 is 5`)              // verileri statik olarak yazma
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // verileri dinamik olarak ekleme
 ```

Örnek:2
```js

let firstName = 'Efsane'
let lastName = 'Günyol'
let country = 'Türkiye'
let city = 'İstanbul'
let language = 'JavaScript'

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 -
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I teach ${language}.`
console.log("dede",personInfoTwo)
console.log(personInfoThree)
```

### String Methodları  

JavaScripte her şe bir nesnedir.String  primitive veri türüdür, bu oluşturulduktan sonra değiştiremeyeceğimiz anlamına gelir.Bir çok string metodu  vardır .Bunlar stringler ile çalışmamıza yardımcı olur. 

  1. lenght : String içerisindeki karakterlerin uzunluğunu döndürür, boşluklar dahildir.

Örnek:

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Efsane'
console.log(firstName.length)  // 6

```
   2. String'deki karakterlere erişim: String içerisinde bulunan her karaktere index numarasıyla erişebilriz.Programlama'da sayma 0 dan başlar.
String'in ilk dizini 0 , son dizini ise toplam uzunluğun -1 dir.

![Accessing sting by index](../images/string_indexes.png)

'JavaScript' string'indeki farklı karakterlere erişelim.
 ```js
let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)//J

let secondLetter = string[1] // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter) // t

let lastIndex = string.length - 1

console.log(lastIndex) // 9
console.log(string[lastIndex]) // t
 ```
   3. toUpperCase(): Bu metot string verisini büyük harflere dönüştürür.
 ```js
let string = 'JavaScript'

console.log(string.toUpperCase()) // JAVASCRIPT

let firstName = 'Asabeneh'

console.log(firstName.toUpperCase())  // ASABENEH

let country = 'Finland'

console.log(country.toUpperCase())    // FINLAND
```
   4. toLowerCase(): Bu metot string verisini küçük harflere dönüştürür.
 ```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Asabeneh'

console.log(firstName.toLowerCase())  // asabeneh

let country = 'Finland'

console.log(country.toLowerCase())   // finland
 ```
   5. substr(): İki arrgüman alır,  belirtilen string'den başlayıp daha sonra belirli sayıda karaktere kadar uzanan string'in bir bölümünü döndürür.
   
```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Türkiye'
console.log(country.substr(3, 4))   // kiye
```
   !! _Bu özellik artık önerilmemektedir.Kullanmaktan kaçının ve mümkünse mevcut kodu güncelleyin;
      kararınızı yönlendirmek için [bu sayfanın](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) altındaki uyumluluk tablosuna bakın. Bu özelliğin herhangi bir zamanda çalışmayı durdurabileceğini unutmayın._

  6. substring(): Başlangıç ​​indeksi ve durma indeksi olmak üzere iki argüman alır ancak durma indeksindeki karakteri içermez (Bu metot string verisini belirtilen index numarasına kadar olan kısmı döndürür.)
```js
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country = 'Türkiye'

console.log(country.substring(0, 3))   // Tür
console.log(country.substring(3, 7))   // kiye
console.log(country.substring(3))      // kiye
```
 7. split(): Bu metot bir stringi belirtilen yerden bölmeye yarar. ( array oluşturur )



