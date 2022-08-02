//EXERCİSES SEVİYE 1

const firstName="Efsane"
const lastName="Günyol"
const country= "Türkiye"
const city="İstanbul"
const age="20"
const isMarried=false
const year=2022

console.log(typeof firstName,typeof lastName ,typeof country , typeof city,typeof age,typeof isMarried,typeof year)// EXERCİSES1

const  sayi1=10
const sayi2="10"
console.log(sayi1==sayi2) // true sayi1=== sayi2 -> false tipleri farklı.. //EXERCİSES2

console.log(parseInt('9.8')===10) //false //EXERCİSES3

const string1="python"
const string2="jargon"
console.log(string1.length !== string2.length)

//EXERCİSES7

const now=new Date()

console.log(now.getFullYear()) //2022

console.log(now.getMonth()+1) // 7

console.log(now) //Sun Jul 31 2022 12:35:29 GMT+0300 (GMT+03:00)

console.log(now.getDate()) //31

console.log(now.getHours()) //12

console.log(now.getMinutes()) //35

console.log(now.getTime()/1000)

//EXERCİSES Seviye 2
const base=prompt(" üçgenin tabanını giriniz")
const height=prompt(" üçgenin yüksekliğini giriniz")
 const area=base*height/2

const areaElemet=document.getElementById("hesap")
areaElemet.innerHTML=area

console.log(document.getElementById("deneme").value) //EXERCİSES8