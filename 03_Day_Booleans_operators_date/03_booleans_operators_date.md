<div align="center">
  <h1> 30 Günde  JavaScript:Booleans, Operators, Date </h1>
</div>

[<< Day 2](../02_Day_Data_types/02_day_data_types.md) | [Day 4 >>](../04_Day_Conditionals/04_day_conditionals.md)


- [📔 Gün 3](#-gün-3)
    - [Boolean Değerleri](#boolean-değerleri)
        - [True Değerleri](#true-değerleri)
        - [False Değerleri](#false-değerleri)
    - [Undefined (Tanımsız)](#undefined-tanmsz)
    - [Null ](#null)
    - [Operatörler](#operats)
        - [Atama Operatörleri](#atama-operatörleri)
        - [Aritmetik Operatörleri](#aritmetik-operatörleri)
        - [Karşılaştırma Operatörleri](#karşılaştırma-operatörleri)
        - [Mantıksal Operatörler](#mantıksal-operatörler)
        - [Arttırma Operatörü](#arttırma-operatörü)
        - [Azaltma Operatörü](#azaltma-operatörü)
        - [Koşul Operatörü](#ternary-operators)
        - [Operatör Önceliği](#operator-önceliği)
    - [Window Metotları](#window-metodları)
        - [Window alert() metot](#window-alert)
        - [Window prompt() metot](#window-prompt)
        - [Window confirm() metot](#window-confirm)
    - [Date Objesi](#date-object)
        - [Bir Zaman Objesi Oluşturma](#bir-zaman-objesi-oluşturma)
        - [Tam Yılı Almak](#tam-yılı-almak)
        - [Ayı Almak](#ayı-almak)
        - [Tarihi Almak](#tarihi-almak)
        - [Günü Almak](#günü-almak)
        - [Saati Almak](#saati-almak)
        - [Dakikayı Almak](#dakikayı-almak)
        - [Saniyeyi Almak](#saniyeyi-almak)
        - [Zamanı Almak](#zamanı-almak)
    - [💻 Gün 3: Egzersizleri](#-gün-3-egzersizleri)
        - [Egzersiz: Seviye 1](#egzersiz-seviye-1)
        - [Egzersiz: Seviye 2](#egzersiz-seviye-2)
        - [Egzersiz: Seviye 3](#egzersiz-seviye-3)

# 📔 Gün 3
## Boolean Değerleri
Boolean veri türü true veya false değerden birini temsil eder.Karşılaştırma operatörünü kullandğınızda  bu veri türlerinin kullanımı netleşecektir.Herhangi bir karşılaştırma sonucu true veya false  olarak bir  değer döndürür.

Örnek:
````js
let isLightOn = true 
let isRaining = false 
let isHungry = false 
let isMarried = true 
let truValue = 4 > 3   //true
let falseValue = 4 < 3  //false
````
Boolean değerleri true ve false olduğunu kabul etmiştik.

### True Değerleri

- Sıfır hariç tüm sayılar (pozitif ve negatif) doğrudur
- Boş bir dize ('') dışında tüm dizeler doğrudur
- Boole değeri true

### False Değerleri 
- 0
- 0n
- null
- undefined
- NaN
- the boolean false
- '', "", ``, empty string

Bu true değerleri ve false değerleri hatırlamak iyidir. Daha sonraki bölümde, onları karar vermek için koşullarla kullanacağız.

## Undefined (Tanımsız)
Bir değişken bildirirsek ve bir değer atamazsak, değer undefined olacaktır. Buna ek olarak bir fonksiyon değer döndürmüyorsa undefined olacaktır.
````js
let firstName
console.log(firstName) //değer atanmadığı için undefined döndürür.
````
## Null

````js
let empty = null
console.log(empty) // -> null , değer yok 
````

## Operators
### Atama Operatörleri
JavaScript'te eşittir işareti bir atama operatörüdür. Değişken atamak için kullanılır.

```js
let firstName = 'Efsane'
let country = 'Turkey'
```
Atama Operatörleri
![Atama Operatörleri](./../images/assignment_operators.png)
### Aritmetik Operatörleri
Aritmetik operatörler matematiksel operatörlerdir.

  - Toplama(+): a + b
  - Çıkarma(-): a - b
  - Çarpma(*): a * b
  - Bölme(/): a / b
  - Kalan(Bölmedeki kalan)(%): a % b
  - (Örneğe Bak) Üstel Sayı (**): a ** b

````js
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo // toplama
let diff = numOne - numTwo // çıkarma
let mult = numOne * numTwo // çarpma
let div = numOne / numTwo // bölme
let remainder = numOne % numTwo // mod alma- kalanı bulma
let powerOf = numOne ** numTwo // üs alma

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64  

````
````js

const PI = 3.14
let radius = 100          // metre cinsinden uzunluk

// Bir dairenin alanını hesaplayalım
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // m/s2 cinsinden ( metre saniye cinsi )
let mass = 72             // kilogram cinsinden

// Bir cismin ağırlığını hesaplayalım
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // oC cinsinden sıcaklık, suyun kaynama noktası
const bodyTemp = 37       // oC cinsinden vücut ısısı


// Dize enterpolasyonu kullanarak dizeyi sayılarla birleştirme
/*
 The boiling point of water is 100 oC. // Suyun kaynama noktası 100 oC'dir.
 Human body temperature is 37 oC.  // İnsan vücut sıcaklığı 37 oC'dir.
 The gravity of earth is 9.81 m/s2. // Dünyanın yerçekimi 9.81 m/s2'dir.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)
````
### Karşılaştırma Operatörleri
Programlamada değerleri karşılaştırırız, iki değeri karşılaştırmak için karşılaştırma operatörlerini kullanırız. Bir değerin diğer değerden büyük mü, küçük mü veya eşit mi olduğunu kontrol ederiz.

![Karşılaştırma Operatörleri](../../images/comparison_operators.png)

**Örnek**:
```js
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
```
Yukarıdaki karşılaştırmaları biraz mantıkla anlamaya çalışın. Herhangi bir mantık olmadan hatırlamak zor olabilir.
JavaScript kodu çalışır ve size bir sonuç verir, ancak bunda iyi değilseniz, istenen sonuç olmayabilir.

Temel kural olarak, eğer bir değer == ile doğru değilse, === ile eşit olmayacaktır. === kullanmak, == kullanmaktan daha güvenlidir. Aşağıdaki [bağlantı](https://dorey.github.io/JavaScript-Equality-Table/) veri türlerinin kapsamlı bir karşılaştırma listesine sahiptir.


### Mantıksal Operatörler

Aşağıdaki semboller ortak mantıksal operatörlerdir:
&&(ve işareti) , || (pipe -veya-) ve !(negation).
&& operatörü, yalnızca iki işlenen doğruysa doğru olur.
|| operatör, işlenenlerden herhangi birinin doğru olması durumunda gerçekleşir.
! operatör true - false ve false - true değerini olumsuzlar.

````js
// && ve operator

const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

// ||

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

//!

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

````
### Arttırma Operatörü
JavaScript'te, bir değişkende depolanan bir değeri artırmak için artırma operatörünü kullanırız. Artış, artış öncesi veya sonrası olabilir. Her birini görelim:

1. Pre-increment
````js
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
````
2. Post-increment

````js
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
````

### Azaltma Operatörü

JavaScript'te, bir değişkende saklanan bir değeri azaltmak için azaltma operatörünü kullanırız. Azaltma, eksiltme öncesi veya sonrası olabilir. Her birini görelim:

1. Pre-decrement

```js
let count = 0
console.log(--count) // -1
console.log(count)  // -1
```

2. Post-decrement

```js
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```

### Ternary Operators

Ternary operator bir koşul yazmaya izin verir.Koşullar yazmanın başka bir yolu da ternary operatörleri kullanmaktır. Aşağıdaki örneklere bakın:
````js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
````
```
You need a rain coat.
No need for a rain coat.
```
````js
let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
````
```
5 is a positive number
-5 is a negative number
```
###  Operator Önceliği
Operator önceliği  [linkten](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) okumanızı tavsiye ederim

## Window Metodları
### Window alert() 
En başta gördüğünüz gibi alert() metodu, belirtilen bir mesaj ve bir OK butonu ile bir uyarı kutusu görüntüler. Yerleşik bir yöntemdir ve argüman alır
```js
alert(message)
```
````js
alert('Welcome to 30DaysOfJavaScript')
````
### Window prompt()
prompt() metodo giriş değerlerini almak için tarayıcınızda bir giriş içeren bir bilgi istemi kutusu görüntüler ve giriş verileri bir değişkende saklanabilir. istem() yöntemi iki argüman alır. İkinci argüman isteğe bağlıdır.
```js
prompt('required text', 'optional text')
```
````js
    let number = prompt('Enter number', 'number goes here')
    console.log(number)
````
### Window confirm()
confirm() metodu, bir Tamam ve İptal butonu ile birlikte belirli bir mesaj içeren bir iletişim kutusu görüntüler.Bir onay kutusu genellikle bir kullanıcıdan bir şeyi yürütmek için izin istemek için kullanılır. Pencere onay() argüman olarak bir dize alır. Tamam'a tıklamak doğru değeri verir, İptal düğmesine tıklamak ise yanlış değeri verir.
```js
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // ne tıkladığınıza göre true veya false döner
````
Bunların hepsi window methodları değil,  window methodlara derinlemesine inmek için ayrı bir bölümümüz olacak.

## Date Object
Zaman önemli bir şeydir. Belirli bir faaliyetin veya olayın zamanını bilmek isteriz. JavaScript'te geçerli saat ve tarih, JavaScript Date Objesi kullanılarak oluşturulur. Date objesini kullanarak oluşturduğumuz nesne, tarih ve saat ile çalışmak için birçok yöntem sunar. Bir tarih nesnesi değerlerinden tarih ve saat bilgisi almak için kullandığımız yöntemler, bilgiyi sağladığı için get kelimesi ile başlamaktadır. getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()

![Date time objesi](./../images/date_time_object.png)

### Zaman Objesi Oluşturma
```js
const now = new Date()
console.log(now) //
```
Bir time nesnesi oluşturduk ve tablo üzerinde bahsettiğimiz get yöntemlerini kullanarak nesneden herhangi bir tarih saat bilgisine ulaşabiliyoruz.
### Tam Yıl Alma
```js
const now = new Date()
console.log(now.getFullYear()) // 2022
```
### Tam Ay Alma
```js
const now = new Date()
console.log(now.getMonth()) // 0-11 , 0=Ocak .... 11=Aralık
```
### Tarih Alma
Bir zaman nesnesinden ayın tarihini çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getDate()) // 24 ,,1-31
```
### Gün Alma
```js
const now = new Date()
console.log(now.getDay()) // 0-6 , 0=Pazar 1=Pazartesi.... 6=Cumartesi
```
### Saat Alma
```js
const now = new Date()
console.log(now.getHours()) // 0-23
```
### Dakika Alma
```js
const now = new Date()
console.log(now.getMinutes()) // 0-59
```
### Saniye Alma
```js
const now = new Date()
console.log(now.getSeconds()) // 0-59
```
### Zamana Alma
Bu yöntem 1 Ocak 1970'den itibaren milisaniye cinsinden süre verir. Unix zamanı olarak da bilinir. Unix zamanını iki şekilde alabiliriz:
 1. getTime()'ı kullanma

```js
const now = new Date()
console.log(now.getTime()) // milisaniye cinsinden süre
```
 2. Date.now()'ı kullanma
```js
const allSeconds = Date.now() //
console.log(allSeconds) // 

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true
```

Bu değerleri okunabilir bir zaman biçimine biçimlendirelim. Örnek:

```js
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 24/7/2022 22:33
```
🌕 Sınırsız bir enerjiniz var. 3. gün zorluklarını yeni tamamladınız ve mükemmelliğe giden yolda üç adım öndesiniz.

## 💻 Gün 3: Egzersizleri

### Egzersiz: Seviye 1
1. firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.
2. '10' türünün 10'a eşit olup olmadığını kontrol edin
3. parseInt('9.8') 10'a eşit olup olmadığını kontrol edin
4. Boolean değeri, doğru veya yanlıştır.
    1. Doğruluk değeri sağlayan üç JavaScript ifadesi yazın.
    2. Yanlış değer sağlayan üç JavaScript ifadesi yazın.

5. console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
    1. 4 > 3   =>true
    2. 4 >= 3  =>true
    3. 4 < 3  =>false
    4. 4 <= 3 =>false
    5. 4 == 4 =>true
    6. 4 === 4 =>true
    7. 4 != 4  =>false
    8. 4 !== 4  =>false
    9. 4 != '4'  =>true
    10. 4 == '4' =>true
    11. 4 === '4' =>false
    12. Python ve jargonun uzunluğunu bulun ve yanlış bir karşılaştırma ifadesi yapın.

6. console.log() kullanmadan önce aşağıdaki ifadelerin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
    1. 4 > 3 && 10 < 12        =>true
    2. 4 > 3 && 10 > 12        =>false
    3. 4 > 3 || 10 < 12        =>true
    4. 4 > 3 || 10 > 12        =>true
    5. !(4 > 3)                =>false
    6. !(4 < 3)                =>true
    7. !(false)                =>true
    8. !(4 > 3 && 10 < 12)      =>false
    9. !(4 > 3 && 10 > 12)       =>true
    10. !(4 === '4')            =>true
    11. Hem dragon hem de python'da 'on' yoktur. =>false

7. Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın.
    1. Bugün yıl nedir?
    2. Bugünün ayı rakam olarak nedir?
    3. Bugünün tarihi nedir?
    4. Bugün sayı olarak gün nedir?
    5. Şimdi saat kaç?
    6. Dakika kaç şimdi?
    7. 1 Ocak 1970'den bugüne kadar geçen saniye sayısını bulun.

### Egzersiz: Seviye 2

1. Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```

2. Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```

3. Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik))
4. Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.
5. y = 2x -2'nin eğimini, x kesme noktasını ve y kesme noktasını hesaplayın
6. Eğim m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun
7. Yukarıdaki iki sorunun eğimini karşılaştırın.
8. y'nin değerini hesaplayın (y = x<sup>2</sup> + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun.
9. Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```

10. Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.
11. Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```

12. İki değişken _myAge_ ve _yourAge_ bildirin ve bunlara başlangıç değerleri ile myAge ve yourAge atayın.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```

13. İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.
    ```sh
    Enter birth year: 1995
    You are 25. You are old enough to drive
    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

14. Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```

15. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun
    1. YYYY-MM-DD HH:mm
    2. DD-MM-YYYY HH:mm
    3. DD/MM/YYYY HH:mm

### Egzersiz: Seviye 3

1. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır (7 saat 07 ve 5 dakika 05 olmalıdır)
    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

[<< Gün 2](../02_Day_Data_types/02_day_data_types.md) | [Gün 4 >>](../04_Day_Conditionals/04_day_conditionals.md)