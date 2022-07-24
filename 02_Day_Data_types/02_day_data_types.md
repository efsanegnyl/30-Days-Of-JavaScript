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
    - [String Methods](#string-methodları)
  - [Veri Türlerini Kontrol Etme ve Döküm(Casting)](#veri-türlerini-kontrol-etme-ve-döküm(casting))
    - [Veri Türlerini Kontrol Etme](#veri-türlerini-kontrol-etme)
    - [Veri Türünü Değiştirme(Casting)](#veri-türünü-değiştirme(casting))
      - [String To Int](#string-to-nt)
      - [String To Float](#string-to-float)
      - [Float To Int](#float-to-nt)
- [💻 2. Gün:Egzersizler](#-2-gun-egzersizler)
   - [Egzersiz:Seviye 1](#egzersiz-seviye-1)
   - [Egzersiz:Seviye 2](#egzersiz-seviye-2)
   - [Egzersiz:Seviye 3](#egzersiz-seviye-3)


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

  6. substring(): Başlangıç indeksi ve durma indeksi olmak üzere iki argüman alır ancak durma indeksindeki karakteri içermez (Bu metot string verisini belirtilen index numarasına kadar olan kısmı döndürür.)
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

```js
console.log("-----Split-----")
let string = '30 Days Of JavaScript'

console.log(string.split())     // 1 elemanlı array oluşturur. -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  //Boşluktan böl dediğim için 4 elemanlı array oluşturur. -> ["30", "Days", "Of", "JavaScript"]


//let firstName = 'Efsane'

console.log(firstName.split())    //- > ["Efsane"]
console.log(firstName.split(''))  // Strinler içindeki tüm karakterleri aray haline getirir->  ["E", "f", "s", "a", "n", "e"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  //  Virgülden böl dendiği için 5 elemanlı array oluşturur.2. elemsnın solunda boşluk oluşur. -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) // ', ' virgül ve boşluk bulunmakta bu yüzden elementleri virgülden ayırıp boşluklsuz arrray oluşturuyor. ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```
   8. trim():String'in başındaki  ve sondaki boşlukları siler.
```js
let stringTrim= '   30 Days Of JavaScript   '

console.log(stringTrim)
console.log(stringTrim.trim(' '))

let firstNameTrim = ' Efsane '

console.log(firstNameTrim)
console.log(firstNameTrim.trim())  // içinde tırnak kullanmasanız dahi boşlukları siler.
```

   9. includes(): Bir alt string argümanı alır ve string alt dize argümanının olup olmadığını kontrol eder.Boolean değer döndürür.Eğer bulunursa true, bulunmazsa false döndürür.
```js
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
```
   10. replace(): Eski stringi yeni stringe değiştirir.
```js
let stringReplace = '30 Days Of JavaScript'
console.log(stringReplace.replace('JavaScript', 'Python')) // 30 Days Of Python

let countryReplace = 'Finland'
console.log(countryReplace.replace("Fin","Eng")) // England
```
   11. charAt(): String deki indexi belirtilen karakteri döndürür.
```js   
let stringCharAt = '30 Days Of JavaScript'
console.log(stringCharAt.charAt(0))        // 3

let lastIndex = stringCharAt.length - 1
console.log(stringCharAt.charAt(lastIndex)) // t
```
   12. charCodeAt(): String deki indexi belirtilen karakterin ASCII kodunu döndürür.
```js
let stringCharCode = '30 Days Of JavaScript'
console.log(stringCharCode.charCodeAt(3))        // D ASCII 68

let lastIndex1 = stringCharCode.length - 1
console.log(stringCharCode.charCodeAt(lastIndex1)) // t ASCII  116
```
   13. indexOf(): Belirtilen string değerin indexini verir. Eğer bulamazsa -1 döndürür.

```js
let stringIndexOf= '30 Days Of JavaScript'

console.log(stringIndexOf.indexOf('D'))          // 3
console.log(stringIndexOf.indexOf('Days'))       // 3
console.log(stringIndexOf.indexOf('days'))       // -1
console.log(stringIndexOf.indexOf('a'))          // 4
console.log(stringIndexOf.indexOf('JavaScript')) // 11
console.log(stringIndexOf.indexOf('Script'))     //15
console.log(stringIndexOf.indexOf('script'))     // -1
```
   14. lastIndexOf(): Belirtilen string değerin son indexini verir. Eğer bulamazsa -1 döndürür.
```js
let stringLastIndex = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(stringLastIndex.lastIndexOf('love'))       // 67
console.log(stringLastIndex.lastIndexOf('you'))        // 63
console.log(stringLastIndex.lastIndexOf('JavaScript')) // 38

```
  15. concat(): Birden çok alt stringi birleştirir.
```js
let stringConcat = '30'
console.log(stringConcat.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let countryConcat = 'Fin'
console.log(countryConcat.concat("land")) // Finland
```
   16. startsWith: Stringin belirtilen string ifadeyle başlayıp başlamadıgını kontrol eder. True veya false döndürür.

```js

let stringStart = 'Love is the best to in this world'

console.log(stringStart.startsWith('Love'))   // true
console.log(stringStart.startsWith('love'))   // false
console.log(stringStart.startsWith('world'))  // false

let countryStart = 'Finland'

console.log(countryStart.startsWith('Fin'))   // true
console.log(countryStart.startsWith('fin'))   // false
console.log(countryStart.startsWith('land'))  //  false
```
   17. endsWith: Stringin belirtilen string ifadeyle bitip bitmediğini kontrol eder. True veya false döndürür.
```js
let stringEnds = 'Love is the most powerful feeling in the world'

console.log(stringEnds.endsWith('world'))         // true
console.log(stringEnds.endsWith('love'))          // false
console.log(stringEnds.endsWith('in the world')) // true

let countryEnds = 'Finland'

console.log(countryEnds.endsWith('land'))         // true
console.log(countryEnds.endsWith('fin'))          // false
console.log(countryEnds.endsWith('Fin'))          //  false
```
   18. search(): Bir normal ifade ile bu String nesnesi arasında bir eşleşme araması yürütür.
```js
console.log(" ----Search---- ")
let stringSearch = 'I love JavaScript. If you do not love  JavaScript what else can you love.'
console.log(stringSearch.search('love'))          // 2
console.log(stringSearch.search(/javascript/gi))  // 7 g-bütün metinde ara i- büyük küçük harf duyarsız
```
  19. match: Argüman olarak bir alt dize veya normal ifade kalıbı alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür. Normal bir ifade kalıbının nasıl göründüğünü görelim. / işareti ile başlar ve / işareti ile biter.
```js
let string = 'love'
let patternOne = /love/     // koşulsuz
let patternTwo = /love/gi   // g-bütün metinde ara, i - büyük küçük harf duyarsız
```
Match syntax
```js
// syntax
string.match(substring)
```

```js
let stringMatch = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(stringMatch.match('love')) //
```
```
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
```
```js
let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]
```
Regex(Regular Expression -Düzenli İfadeler) kullanarak metinden sayıları çıkalaralım .Burası regex bölümü değil, panik yapmayın!Regular expression 'ı daha sonra ele alacağız.
```js
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// + bir veya daha fazla basamaklı sayı anlamına gelir,
// ondan sonra g varsa global demektir, her yerde ara.

console.log(txt.match(regEx))  //
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```
   20. repeat():Argüman olarak bir sayı alır.  String nesnesinin belirtilen sayıda tekrarlanmasını sağlar.
```js
let stringRepeat = 'love'
console.log(stringRepeat.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

  ## Veri Türlerini Kontrol Etme ve Döküm(Casting)
  ### Veri Türlerini Kontrol Etme

Belirli bir değişkenin veri türünü kontrol etmek için typeof yöntemini kullanırız.

Örnek;
```js

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
```
 ### Veri Türünü Değiştirme(Casting)
   - Döküm: Bir veri tipini başka bir veri tipine dönüştürme. Kullandıklarımız parseInt(), parseFloat(), Number(), + sign, str() Aritmetik işlemler yapmadan önce string sayıları önce integer yada float türüne dönüştürmeliyiz yoksa hata alırız.
 #### String to Int
String bir numarayı  sayıya dönüştürebiliriz. Alıntı içindeki herhangi bir sayı bir string numarasıdır. Bir string numarası örneği: '10', '5', vb. Aşağıdaki yöntemleri kullanarak stringi sayıya dönüştürebiliriz:
  - parseInt()
  - Number()
  - Plus sign(+) // artı işareti 
 ```js
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
```
 ```js
let num = '10'
let numInt = Number(num)

console.log(numInt) // 10
```
 ```js
let num = '10'
let numInt = +num

console.log(numInt) // 10
```
  #### String to Float
  String bir float sayıya dönüştürülebilir. Alıntı içindeki herhangi bir sayı bir string float sayısıdır. Bir string float sayısı örneği: '9.81', '3.14', '1.44' vb. Aşağıdaki yöntemleri kullanarak stringi float sayıya dönüştürebiliriz:
  - parseFloat()
  - Number()
  - Plus sign(+) // artı işareti 
  ```js
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
```
```js
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
```
```js
let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81
```
#### Float to Int
Float bir numarayı  tam sayıya dönüştürebiliriz. Alıntı içindeki herhangi bir sayı bir float sayısıdır. Aşağıdaki yöntemi kullanarak float sayısını sayıya dönüştürebiliriz:
  - parseInt()
  ```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕 Harikasın. 2. günü yeni tamamladınız ve mükemmelliğe giden yolda iki adım öndesiniz. Şimdi beyniniz ve kasınız için bazı egzersizler yapın.

# 💻 2. Gun: Egzersizler
#### Egzersiz: Seviye 1
 1. challenge adında bir değişken tanımlayın ve '30 Days Of JavaScript' başlangıç değerine atayın.
 2. console.log() kullanarak tarayıcı konsolunda değişkeni yazdırın,
 3. console.log() kullanarak tarayıcı konsolunda stringin  length değerini yazdırın,
 4. toUpperCase() yöntemini kullanarak tüm string karakterlerini büyük harflerle değiştirin,
 5. toLowerCase() yöntemini kullanarak tüm string karakterlerini küçük harflerle değiştirin,
 6. substr() veya substring() yöntemini kullanarak string'in ilk kelimesini kesin  
 7. Days Of JavaScript ifadesini 30 Days Of JavaScript'ten ayırın.
 8. includes() yöntemini kullanarak string'in Script kelimesini içerip içermediğini kontrol edin
 9. split() yöntemini kullanarak string öğesini bir array'ye bölün
 10. 30 Days Of JavaScript dizesini split() yöntemini kullanarak boşlukta bölün
 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülden split ve bir dizi olarak değiştirin.
 12. replace() yöntemini kullanarak 30 Days of JavaScript'i 30 Days of Python olarak değiştirin.
 13. '30 Days of JavaScript' stringin de dizin 15'teki karakter nedir? charAt() yöntemini kullanın.
 14. charCodeAt() kullanan '30 Days of javaScript' stringinde  J karakter kodu nedir?
 15. 30 Days of JavaScript'te a öğesinin ilk oluşumunun konumunu belirlemek için indexOf kullanın
 16. 30 Days of JavaScript'te a öğesinin son oluşumunun konumunu belirlemek için lastIndexOf kullanın.
 17. Aşağıdaki cümlede "because" kelimesinin ilk geçtiği yeri bulmak için indexOf kullanın:
    'You cannot end a sentence with because because because is a conjunction'
 18. Aşağıdaki cümlede "because" kelimesinin son geçtiği yeri bulmak için lastIndexOf kullanın:
     'You cannot end a sentence with because because because is a conjunction'
 19. Aşağıdaki cümlede "because" kelimesinin ilk geçtiği yeri bulmak için search kullanın: 
     'You cannot end a sentence with because because because is a conjunction'
 20. Bir stringin başındaki ve sonundaki boşlukları kaldırmak için trim() kullanın. 
     Örneğin '30 Days Of JavaScript'.
 21. 30 Days Of JavaScript stringiyle startsWith() yöntemini kullanın ve sonucu doğru yapın
 22. 30 Days Of JavaScript stringiyle endsWith() yöntemini kullanın ve sonucu doğru yapın
 23. "30 Days of JavaScript" tüm a'lari bulmak için match() yöntemini kullanın
 24. concat() kullanın ve '30 Days of' ve 'JavaScript'i tek bir string olan '30 Days of JavaScript' ile birleştirin
 25. 30 Gün JavaScript'i 2 kez yazdırmak için repeat() yöntemini kullanın 
#### Egzersiz: Seviye 2
 1. console.log() kullanarak aşağıdaki ifadeyi yazdırın:
  ```
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
```
2. console.log()'u kullanarak Rahibe Teresa'nın aşağıdaki alıntısını yazdırın:

  ```
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
```
3. '10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.
4. parseFloat('9.8') 10'a tam olarak eşit değilse, 10'a eşit olup olmadığını kontrol edin.
5. Hem python hem de jargonda 'on' ifadesinin bulunup bulunmadığını kontrol edin
6. _I hope this course is not full of jargon_. Cümlede jargon olup olmadığını kontrol edin.
7. 0 ile 100 arasında rastgele bir sayı üretin.
8. 50 ile 100 arasında rastgele bir sayı üretin.
9. Dahil olmak üzere 0 ile 255 arasında rastgele bir sayı oluşturun.
10. Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.
11. Aşağıdaki kalıbı yazdırmak için console.log() ve kaçış karakterlerini kullanın.
````
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
````
12. substr kullanarak because because ifadesini aşağıdaki cümleden ayırın:
    'You cannot end a sentence with because because because is a conjunction'

#### Egzersiz: Seviye 3
1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.'' Bu cümledeki love kelimesini sayın.
2. Aşağıdaki cümledeki tüm because kelimelerini saymak için match() kullanın:
   'You cannot end a sentence with because because because is a conjunction'
4. Aşağıdaki metni temizleyin ve en sık kullanılan kelimeyi bulun (ipucu,replace  ve regex kullanın).
 ```
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
```
4. Aşağıdaki metinden sayıları çıkararak kişinin yıllık toplam gelirini hesaplayın.
```
Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.'
```
🎉 TEBRİKLER ! 🎉

[<< 1. Gün](../readMe.md) | [3. Gün >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)

















