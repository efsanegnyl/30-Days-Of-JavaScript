let nums=[1,2,3]
nums[0]=10

console.log("nums",nums) // nums [10,2,3]

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