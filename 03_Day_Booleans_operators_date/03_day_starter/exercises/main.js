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

//egzersiz 1

let fieldCalc = () => {
    let base=document.getElementById("base").value;
    let height=document.getElementById("height").value;
    let field=base*height/2;
    document.getElementById("text").innerHTML=field;
};
//egzersiz 2
let areaCalc = () => {
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let c=document.getElementById("c").value;
    let area=Number(a)+Number(b)+Number(c);
    document.getElementById("area").innerHTML=area;
};
//egzersiz 3
let dikCalc = () => {
    let d=document.getElementById("d").value;
    let e=document.getElementById("e").value;
    let dikt=Number(d)*Number(e)
    document.getElementById("dik").innerHTML=dikt;
};
let yaricap=6;
const pi=3.14;
console.log("Dairenin Alanı",pi*yaricap*yaricap)
console.log("Dairenin Çevresi",2*pi*yaricap)





