# 30 Günde Javascript
<a href="https://github.com/Asabeneh/30-Days-Of-JavaScript" target="_blank">Asabeneh Yetayeh</a>
'ın 30 Days of JavaScript' oluşturduğu ve 30 günde javascripti öğretmeyi hedeflediği repoyu elimden geldiğince türkçeleştirerek , ders sonlarındaki egzersizlerin örneklerini de paylaşacağım.


| # Günler |       Konular        |
|----------|:--------------------:|
| 01       | [Giriş](./readMe.md) |
| 02       | [Data Types - Veri Tipleri-](./02_Day_Data_types/02_day_data_types.md) |


[30 Günde  JavaScript](#30-days-of-javascript)
- [📔 1.Gün](#-1-gun)
    - [Giriş](#giriş)
    - [Gereksinimler](#gereksinimler)
    - [Kurulum](#kurulum)
      - [Node.js İndirin](#nodejs-indirin)
      - [Browser](#browser)
        - [Google Chrome  Yükleyin](#google-chrome-indirin)
        - [Google Chrome Console Açma](#google-chrome-console-açma)
        - [Tarayıcı Konsolunda Kod Yazma](#browser-console-kod-yazma)
          - [Console.log](#consolelog)
          - [Console.log with Multiple Arguments](#console.log-birden-fazla-değer)
          - [Comments-Yorumlar](#comments-yorumlar)
          - [Syntax](#syntax)
        - [Aritmetik](#aritmetik)
      - [Code Editor](#code-editor)
    - [Bir Web Sayfasına Js Ekleme](#bir-web-sayfasına-js-ekleme)
      - [Inline Script](#inline-script)
      - [Internal Script](#internal-script)
      - [External Script](#external-script)
      - [Multiple External Scripts](#multiple-external-scripts)
    - [Veri Türlerine Giriş](#veri-türlerine-giriş)
      - [Numbers](#number)
      - [Strings](#strings)
      - [Booleans](#booleans)
      - [Undefined](#undefined)
      - [Null](#null)
    - [Veri Türlerini Kontrol Etme](#veri-trlerini-kontrol-etme)
    - [Tekrar Yorumler](#tekrar-yorumlar)
    - [Değişkenler](#değişkenler)
- [💻 1. Gün:Egzersizler](#-1-gun-egzersizler)


  
# 📔 1. Gun
## Giriş

**Tebrikler**  30 günlük javaScript programlama challenge' a katılmaya karar verdiniz. Bu challenge'da JavaScript programcısı olmak için ihtiyacınız olan her şeyi ve genel olarak tüm  programlama kavramını öğreneceksiniz. Yardıma ihtiyacınız olursa veya başkalarına yardım etmek isterseniz  [telegram](https://t.me/ThirtyDaysOfJavaScript) grubuna katılabilirsiniz.

**30 Günde JavaScript** challenge'ı hem yeni başlayanlar için hemde ileri düzey JavaScript geliştiricileri için bir kılavuzdur. 

JavaScript, web sitelerine etkileşim eklemek , mobil uygulamalar, masaüstü uygulamaları , oyunlar geliştirmek için kullanılır ve günümüzde JavaScript, makine öğrenimi ve yapay zeka için kullanılabilir.

## Gereksinimler

Yalnızca şunlara ihtiyacınız var:

1. Motivasyon
2. Bilgilsayar
3. İnternet
4. Browser(Tarayıcı)
5. Kod Editörü (IDE)

## Kurulum

### Node.js İndirin 

Node.js'e şuan ihtiyacınız olmayabilir, ancak daha sonra ihtiyacnız olabilir. [Node.js](https://nodejs.org/en/)'i indirebilirsiniz .

![Node download](./images/download_node.png)

İndirdikten sonra çift tıklayın ve kurun

Localiniz de node'un kurulu olup olmadıgını terminali veya komut istemini kullanarak kontrol edebilirsiniz.
```sh
$ node -v
v12.14.0
```
### Browser

#### Google Chrome İndirin

Hneüz indirmediyseniz  [Google Chrome](https://www.google.com/chrome/)' u indirin. Tarayıcı konsoluna küçük JavaScript kodları yazabiliriz, ancak tarayıcı konsolunu uygulama geliştirmek için kullanmayız.

####  Google Chrome Console Açma

Google Chrome konsolunu, tarayıcının sağ üst köşesindeki üç noktayı tıklayarak, Diğer araçlar -> Geliştirici araçları'nı seçerek veya bir klavye kısayolu kullanarak açabilirsiniz. Kısayolları kullanmayı tercih ederim.

Bir klavye kısayolu kullanarak Chrome konsolunu açmak için.

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Opening console](./images/opening_chrome_console_shortcut.png)

Google Chrome konsolu açtıktan sonra,işaretli butonları keşfetmeye çalışın. Zamanın çoğunu konsolda geçireceğiz. Google Konsol V8 motoru, JavaScript kodunuzu makine koduna değiştirir. Google Chrome konsoluna bir JavaScript kodu yazalım

![write code on console](./images/js_code_on_chrome_console.png)

#### Browser Console Kod Yazma

Google console'una veya herhangi bir tarayıcı console'a herhangi bir JavaScript kodu yazabiliriz. Ancak, bu challenge da sadece Google Chrome console'a odaklanıyoruz. Aşağıdakileri kullanarak console açın 


```sh
Mac
Command+Option+I
Windows:
Ctl+Shift+I
```

##### Console.log

İlk JavaScript kodumuzu yazmak için  **console.log()** kullandık.
```js
console.log('Hello, World!')
```

##### Console.log Birden Fazla Değer

**`console.log()`** işlevi , virgülle ayrılmış birden çok parametre alabilir. Syntax'ı aşağıdaki gibidir. 

**`console.log(param1, param2, param3)`**

![console log multiple arguments](./images/console_log_multipl_arguments.png)

```js
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')
```


Tebrikler! İlk JavaScript kodunuzu  _`console.log()`_ kullanarak yazdınız.

##### Comments-Yorumlar

Kodumuzu yorum ekleyebiliriz.Yorumlar, kodu daha okunaklı hale getirmek ve kodumuzda açıklamalar bırakmak için çok önemlidir.JavaScript kodumuzun yorum kısmını işlemez. JavaSvript' e `//` ile başlayan herhangi bir metin saıtı yorumdur, <br>
ve  bunun gibi arasındaki metinlerde
`//`yorumdur.

**Örnek:Tek Satırlı Yorum**

```js
// This is the first comment  
// This is the second comment  
// I am a single line comment
```

**Örnek: Çok Satırlı  Yorum**

```js
/*
This is a multiline comment  
 Multiline comments can take multiple lines  
 JavaScript is the language of the web  
 */
```

##### Syntax

Programmlama dilleri insan dillerine benzer. İngilizce veya diğer birçok dil, anlamlı bir mesaj iletmek için kelimeler, deyimler, cümleler, bileşik cümleler ve daha fazlasını kullanır.Syntax' ın  İngilizce anlamı, bir dilde iyi oluşturulmuş cümleler oluşturmak için kelimelerin ve deyimlerin düzenlenmesidir. Syntax'ın teknik tanımı, bir bilgisayer dilindeki ifadelerin yapısıdır. Programlama dilleri syntax'a sahiptir.JavaScript bir programlama dilidir ve diğer programlama dilleri gibi kendi syntax'ına  sahiptir. Eğer JavaScriptin anladığı dyntax ı kullanmazsak , farklı türde hatalar ortaya çıkar.
Farklı JavaScript hata türlerini daha sonra keşfedeceğiz. Şimdilik syntax hatalarını görelim.

![Error](./images/raising_syntax_error.png)

Hata geri bildirim kılavuzunu okuyarak syntax düzeltebilir ve sorunu çözebiliriz. Bir programdaki hataları belirleme ve kaldırma işlemine hata ayıklama denir. Hataları düzeltelim:
```js
console.log('Hello, World!')
console.log('Hello, World!')
```

Şimdiye kadar,  _`console.log()`_ kullanılarak metnin nasıl görüntüleneceğini gördük.  _`console.log()`_, kullanarak metin veya dize yazdırıyorsak, metnin tek tırnak, çift tırnak veya ters tik içinde olması gerekir.
**Örnek:**

```js
console.log('Hello, World!')
console.log("Hello, World!")
console.log(`Hello, World!`)
```

#### Aritmetik

Şimdi, sayı veri türleri için Google Chrome konsolunda _`console.log()`_ kullanarak JavaScript kodları yazma konusunda daha fazla alıştırma yapalım. Metne ek olarak JavaScript kullanarak matematiksel hesaplamalar da yapabiliriz.
Aşağıdaki basit hesaplamaları yapalım. Google Chrome konsoluna JavaScript kodu doğrudan  **_`console.log()`_** işlevi olmadan yazılabilir. Ancak, bu girişe dahil edilmiştir, çünkü bu zorluğun çoğu, işlevin kullanımının zorunlu olacağı bir metin düzenleyicide yer alacaktır.Console daki talimatlarla doğrudan oynayabilirsiniz.
0![Arithmetic](./images/arithmetic.png)

```js
console.log(2 + 3) // Toplama
console.log(3 - 2) // Çıkarma
console.log(2 * 3) // Çarpma
console.log(3 / 2) // Bölme
console.log(3 % 2) // Mod - kalan bulma
console.log(3 ** 2) // Üs 3 ** 2 == 3 * 3
```

### Code Editor

"Ben Ide olarak WebStorm kullanıyorum.

## Bir Web Sayfasına Js Ekleme

JavaScript bir web sayfasına 2 farklı şekilde eklenebilir:

- **_Inline script_**  _Satır İçi_
- **_Internal script_** _Dahili_
- **_External script_** _Harici_
- **_Multiple External scripts_** _Çoklu Harici_

Aşağıdaki bölümler, web sayfanıza JavaScript kodu eklemenin farklı yollarını gösterir

### Inline Script

Masaüstünüzde veya herhangi bir yerde bir proje klasörü oluşturun, 30DaysOfJS olarak adlandırın ve proje klasöründe bir index.html dosyası oluşturun. Ardından aşağıdaki kodu yapıştırın ve örneğin Chrome gibi bir tarayıcıda açın.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
  </body>
</html>
```

İlk satır içi komut dosyanızı yazdınız. _`alert()`_ fonklsiyonunu kullarak bir pop up  uyarı mesajı oluşturabilirsiniz

### Internal Script

Script tagı  _`head`_ veya  _`body`_'e yazılabilir,ancak HTML _`body`_  içerisine yerleştirilmesi tercih edilir.Öncelikle  _`head`_ tagları arasına yazalım 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </head>
  <body></body>
</html>
```

Çoğu zaman scriptleri bu şekilde yazarız.JavaScript kodunun  _`body`_ tagına  yazılması en çok tercih edilen seçenektir.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Internal Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </body>
</html>
```

`console.log()` çıktısını görmek için tarayıcı console'unu açın.

![js code from vscode](./images/js_code_vscode.png)

### External Script

Dahili komut dosyasına benzer şekilde, harici komut dosyası bağlantısı _`head`_ veya  _`body`_ üzerinde olabilir, ancak _`body`_ tagına  yerleştirilmesi tercih edilir
```js
console.log('Welcome to 30DaysOfJavaScript')
```

External scripts  _head_:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript:External script</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>
```

External scripts in the _body_:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript:External script</title>
  </head>
  <body>
    <!-- JavaScript external link could be in the header or in the body --> 
    <!-- Before the closing tag of the body is the recommended place to put the external JavaScript script -->
    <script src="introduction.js"></script>
  </body>
</html>
```

`console.log()` çıktısını görmek için tarayıcı console'unu açın.

### Multiple External Scripts

Ayrıca birden fazla harici JavaScript dosyasını bir web sayfasına bağlayabiliriz. 30DaysOfJS klasörü içerisinde bir `helloworld.js` dosyası oluşturun ve aşağıdaki kodu yazın.


```js
console.log('Hello, World!')
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
```

_main.js dosyanız diğer tüm  scriptlerin altında olmalıdır_. Bu çok önemlidir

![Multiple Script](./images/multiple_script.png)

## Veri Türlerine Giriş

JavaScript'te ve ayrıca diğer programlama dillerinde farklı veri türleri vardır. Aşağıdakiler JavaScript ilkel veri türleridir: String, Number, Boolean, undefined, Null ve Symbol.

### Number

- Integers: Tam Sayılar  (negatif, sıfır ve pozitif) number
  Örnek:
  ... -3, -2, -1, 0, 1, 2, 3 ...
- Float-point numbers: Decimal number
  Örnek
  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### Strings

İki tek tırnak, çift tırnak veya ters tik arasında bir veya daha fazla karakter koleksiyonu.

**Örnek:**

```js
'a'
'Asabeneh'
"Asabeneh"
'Finland'
'JavaScript is a beautiful programming language'
'I love teaching'
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
'A string could be just as small as one character or as big as many pages'
'Any data type under a single quote, double quote or backtick is a string'
```

### Booleans

Bir boolen değeri, Doğru veya Yanlış'tır. Herhangi bir karşılaştırma, doğru veya yanlış olan bir boole değeri döndürür.
Boolean veri türü, doğru veya yanlış bir değerdir.

**Örnek:**

```js
true // if the light is on, the value is true
false // if the light is off, the value is false
```

### Undefined

In JavaScript'te bir değişkene değer atamazsak değer undefined'dır. Buna ek olarak, bir işlev hiçbir şey döndürmüyorsa, undefined döndürür.
```js
let firstName
console.log(firstName) // undefined, çünkü değer atanmamış
```

### Null

JavaScript'te null boş bir değer anlamına gelir.

```js
let emptyValue = null
```

## Veri Türlerini Kontrol Etme

Belirli bir değişkenin veri tipini kontrol etmek için **typeof**  operatörünü kullanırız. Aşağıdaki örneğe bakın
```js
console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined
```

##  Tekrar Yorumlar

JavaScript'te yorum yapmanın diğer programlama dillerine benzer olduğunu unutmayın. Yorumlar, kodunuzu daha okunabilir hale getirmek için önemlidir.
Yorum yapmanın iki yolu vardır:

- _Single line commenting_ - Tek Satır Yorum 
- _Multiline commenting_ - Çok Satır Yorum

```js
// commenting the code itself with a single comment
// let firstName = 'Asabeneh'; single line comment
// let lastName = 'Yetayeh'; single line comment
```

Multiline commenting:

```js
/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  This is a Multiple line comment
*/
```

## Değişkenler

Değişkenler veri  _tanımlayıcılarıdır_. Değişkenler, verileri bir bellek konumunda depolamak için kullanır.Bir değişken bildirildiğinde, bir bellek konumu ayrılır.
Bir değere (veri) bir değişken atandığında, bellek alanı bu verilerle doldurulacaktır. Bir değişken bildirmek için  _var_, _let_, veya _const_ anahtar sözcükleri kullanırız.


Değeri sonradan değiştirilecek olan değişlenler için  _let_ kullanırız. 
Sabit  _değeri değiştirilmeyecek_ değişkenler oluşturmak  için _const_ kullanırız.Örneğin Pi, ülke adı, yerçekimi değişmez ve const kullanabiliriz.
Bu challenge da _var_ kullanmayacağız ve kullanmanızı tavsiye etmiyorum.

Geçerli bir JavaScript değişken adı aşağıdaki kurallara uymalıdır:

- JavaScript değişken adı, bir sayı ile başlamamalıdır.
- JavaScript  değişken adı, dolar işareti ve alt çizgi dışında özel karakterlere izin vermez.
- JavaScript  değişken adı, camelCase kuralına uygun olarak yazılmalıdır.
- JavaScript  değişken adı, kelimeler arası boşluk olmalıdır.

Aşağıdakiler geçerli JavaScript değişkenlerine örnekler verilmiştir.

```js
firstName
lastName
country
city
capitalCity
age
isMarried
first_name
last_name
is_married
capital_city
num1
num_1
_num_1
$num1
year2020
year_2020
```

Listedeki birinci ve ikinci değişkenler, JavaScript'te camelCase bildirme kuralına uyar.
Bu materyalde camelCase değişkenlerini (camelWithOneHump) kullanacağız.
Sınıfları bildirmek için CamelCase(CamelWithTwoHump) kullanıyoruz, diğer bölümde sınıflar ve nesneler hakkında tartışacağız.

Geçersiz değişkenlere örnek:


```js
  first-name
  1_num
  num_#_1
```

Değişkenleri farklı veri tipleriyle tanımlayalım. Bir değişken bildirmek için değişken adından önce let veya const anahtar sözcüğünü kullanmamız gerekir. Değişken adının ardından eşittir işareti (assignment operator) ve bir değer (assigned data) yazıyoruz.
```js
// Syntax
let nameOfVariable = value
```

**Examples of declared variables**

```js
// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true
console.log(firstName, lastName, country, city, age, isMarried)
```

```sh
Asabeneh Yetayeh Finland Helsinki 100 true
```

```js
// Declaring variables with number values
let age = 100 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)
```

```sh
9.81 100 3.14
```

```js
// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)
```

```sh
Asabeneh teacher Finland
```

01-Day klasöründe _index.html_ dosyasını çalıştırdığınızda şunu almalısınız:

![Day one](./images/day_1.png)

🌕 Harikasın! 1.gün challenge'ını tamamladın ve mükemmellik yolundasın.Şimdi egzersizleri yapalım.
# 💻 1. Gun: Egzersizler

 1. _Yorumların kodu okunabilir hale getirebileceğini_ söyleyen tek satırlık bir yorum yazın
```js
// Yorumların kodu okunabilir hale getirir.
```
 2. _30 Günde JavaScripte Hoşgeldiniz_ yazan başka bir yorum yazınız
```js
// 30 Günde JavaScripte Hoşgeldiniz.
```
 3. Yorumların kodu okunabilir, yeniden kullanımı kolay ve bilgilendirici hale getirebileceğini söyleyen çok satırlı bir yorum yazın
```js
    
   // Yorumlar kodu okunabilir,
   // yeniden kullanımı kolay ve bilgilendirici hale getirir.
    
```
 4. Bir değişken.js dosyası oluşturun ve değişkenleri bildirin string, boolean, undefined ve null veri türleri atayın

```js

let ad;// undefined
let fullName='Efsane';// string
let isStudent = false; // boolean
let number= 25; // number
let nullValue = null; // null
const euler = 2.71828; // number (const)
console.log(isStudent,fullName,ad,number,nullValue,euler);
```
 5. datatypes.js dosyası oluşturun ve farklı veri türlerini kontrol etmek için JavaScript **_typeof_**  operatörünü kullanın. Her değişkenin veri türünü kontrol edin 
```js
 console.log(
    typeof isStudent,
    typeof fullName,
    typeof ad,
    typeof number,
    typeof nullValue,
    typeof euler

)
  ```
 6. Değer atamadan dört değişken bildirin
```js
let declaredVariable;
let declaredVariableTwo;
let declaredVariableThree;
let declaredVariableFour;
  ```
 7. Atanan değerlerle dört değişken bildirin
```js
 let declaredVariable;
 declaredVariable = 'Efsane';

let declaredVariableTwo;
declaredVariableTwo = 'Deneme';

let declaredVariableThree;
declaredVariableThree = 'declaredVariableThree';

let declaredVariableFour;
declaredVariableFour = 'declaredVariableFour';
  ```
 8. Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı birden çok satırda saklamak için değişkenler bildirin
```js
    let firstName = 'Efsane';
    let lastName = 'Günyol'; 
    let country = 'Turkey'; 
    let age = 25; 
    let isMarried = false;
```
 10. Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı tek bir satırda saklamak için değişkenler bildirin
```js
    let  firstName = 'Efsane',
         lastName = 'Günyol',
         country = 'Turkey',
         age = 25,
         isMarried = false;
```
 11. myAge ve yourAge adlı iki değişkeni bildirin ve bunlara başlangıç değerlerini atayın ve tarayıcı consoleuna yazdırın.


```sh
I am 25 years old.
You are 30 years old.
```
```sh
myAge = 25;
yourAge = 30;
console.log(`Ben  ${myAge} yaşındayım`);
console.log(`Sen  ${yourAge} yaşındasın`);
```

🎉 Tebrikler ! 🎉

[2.Gün >>](./02_Day_Data_types/02_day_data_types.md)
