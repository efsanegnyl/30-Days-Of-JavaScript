console.log("----------Egzarsiz : Seviye 1----------");

let challenge='30 Days Of JavaScript' ; // egzersiz 1
console.log(challenge);                 // egzersiz 2
console.log(challenge.length);          // egzersiz 3
console.log(challenge.toUpperCase());   // egzersiz 4
console.log(challenge.toLowerCase());   // egzersiz 5
console.log(challenge.substring(3,challenge.length));       // egzersiz 6

let number=challenge.indexOf('JavaScript');
let string=challenge.substring(number,challenge.length);

let string2=challenge.substring(0,number);

let challenge2=challenge.substring(3,challenge.length); // egzersiz 7
console.log(challenge2);

console.log(challenge.includes("Script")); // egzersiz 8 -true

console.log(challenge.split("")); // egzersiz 9 - ["3", "0", " ", "D", "a", "y", " ", "D", "a", "t", "a", " ", "t", "y", "p", "e", "s"]

console.log(challenge.split(" ")); // egzersiz 10 - ["30", "Days", "Of", "JavaScript"]

let challenge3="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(challenge3.split(", ")); // egzersiz 11 - ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

let result=challenge.replace("JavaScript", "Pyton"); // egzersiz 12 - 30 Days Of Pyton
console.log(result);

console.log(challenge.charAt(15)); // egzersiz 13 - S

console.log(challenge.charCodeAt(11)); // egzersiz 14 - 74

console.log(challenge.indexOf("a")); // egzersiz 15 - 4

console.log(challenge.lastIndexOf("a")); // egzersiz 16 - 14

let challenge4="You cannot end a sentence with because because because is a conjunction";
console.log(challenge4.indexOf("because")); // egzersiz 17 - 31
console.log(challenge4.lastIndexOf("because")); // egzersiz 18 - 47
console.log(challenge4.search("because"))// egzersiz 19 - 31

let challeng5="  Hello World  ";
console.log(challeng5.trim()); // egzersiz 20 - Hello World

console.log(challenge4.startsWith("You")); // egzersiz 21 - true

console.log(challenge4.endsWith("conjunction")); // egzersiz 22 - true

console.log(challenge.match(/a/gi)) // egzersiz 23

console.log(string2.concat(string)); // egzersiz 24

console.log(challenge.repeat(2)); // egzersiz 25

console.log("----------Egzarsiz : Seviye 2----------");

console.log(` The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
`)// egzersiz 1

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`)// egzersiz 2

let number1="10"
console.log(number1===10 ? "True" : Number(number1)); // egzersiz 3

let float1=9.8;
console.log(float1===10 ? " Sayı 10'a eşit" : " Sayı 10'a eşit değil"); // egzersiz 4

let string3="python";
let string4="jargon";
console.log(string3.indexOf("on") , string4.indexOf("on")); // egzersiz 5

let challenge6="I hope this course is not full of jargon";
console.log(challenge6.includes("jargon")); // egzersiz 6

let randomNumber1=Math.floor(Math.random()*100);
console.log(randomNumber1); // egzersiz 7

let randomNumber2=Math.floor(Math.random()*(50)+50);
console.log(randomNumber2); // egzersiz 8


let randomNumber3=Math.floor(Math.random()*255+1);
console.log(randomNumber3); // egzersiz 9

let randomNumber4=Math.floor(Math.random()*10);
console.log(string.substring(randomNumber4)); // egzersiz 10

console.log("1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125 "); // egzersiz 11

console.log(challenge4.substring(0,challenge4.indexOf("because"))) // egzersiz 12

console.log("----------Egzarsiz : Seviye 3----------");

let string3_1='Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(string3_1.match(/love/g)); // egzersiz 1

console.log(challenge4.match(/because/g)); // egzersiz 2

let string3_2='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let mountlySalary = string3_2.match(/\d+/g) // egzersiz 4

let salary1=Number( mountlySalary[0]);
let salary2=Number( mountlySalary[1]);
let salary3=Number( mountlySalary[2]);
console.log((salary1*12)+salary2+(salary3*12));