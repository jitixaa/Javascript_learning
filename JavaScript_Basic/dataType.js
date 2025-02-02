// 1#Primitive Datatype call by value
// 7 Types : String , number , Boolean, null, undefined, symbol(unique value), BigInt(Big value and secinfic value)



const score = 100
const scoreValue = 100.3



const isLoggin = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)



const bigNumber = 358694585n



// 2#call by Reference (Non Primitive)

// Array , Objects, Functions

const fruits = ["Apple",'Orange','Banana']

let myObj = {
    name :"jitixa",
    age : 29,
    coures : "IT"
}

const myFunction = function(){
    console.log("Hello Function");
    console.log(typeof myFunction);
    
}
// return myFunction()



//https://262.ecma-international.org/5.1/#sec-11.4.3

//  ===========================================Memory==============================================

// Stack(Primitive), Heap(Non-Primitive)

let myName = "Jitixa Sutariya"
let anotherName = myName
anotherName = "Sutariya Ravi jitixa"



// console.log(myName)
// console.log(anotherName);

let userOne = {
    email :"Test@gmail.com",
    user:"Test"
}

let UserTwo = userOne
console.log(UserTwo);

UserTwo.email = "jitixa@gmail.com"
console.log(userOne.email);
console.log(UserTwo.email);









