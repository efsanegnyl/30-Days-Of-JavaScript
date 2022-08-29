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
//egzersiz 10

const name="Efsane"
const surname="Günyol"

if(name.length<=7){
    console.log("isim kısa")
}else{
    console.log("isim uzun")
}

//egzersiz 11

if(name.length>surname.length) {
    console.log(`Adınız ,${name}, soyadınızdan daha uzun  ,${surname}`)

}else if(name.length<surname.length){
    console.log(`Adınız ,${name}, soyadınızdan daha kısa  ,${surname}`)
}else{
    console.log(`Adınız ,${name}, soyadınıza eşit,${surname}`)
}

//egzersiz 12
const myAge=89;
const yourAge=90

if(myAge>yourAge){
    const year=myAge-yourAge;
    console.log(`Ben senden ${year} yaş daha yaşlıyım`)
}else if(myAge<yourAge)
{
    const year=yourAge-myAge;
    console.log(`sen benden ${year} yaş daha yaşlısın`)
}else{
    console.log(`aynı yaştayız`)
}

//egzersiz 13
const birthday=()=>{
    const date=new Date();
    const birhtday=document.getElementById("birthday").value;
    const year=document.getElementById("year");
    const age=date.getFullYear()-birhtday;

    if(age>=18){
        year.innerHTML=` ${age} yaşındasın ehliyet alabilirsin`
    }else{
        if(birhtday>2022){
            year.innerHTML=`${birhtday} yılında doğamazsın`
        }else{
            year.innerHTML=`${age} yaşındasın ehliyet alamazsın`
        }

    }
}