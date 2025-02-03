// singleton 
// Object.create



//object literals

const mySymb = Symbol("key1")


const jsUser = {
    name : "Jitixa",
    "fullname" :"Jitixa Sutariya",
    [mySymb]: "MyKey",
    age:29,
    location:"Australia",
    email:"jitixa@gmail.com",
    is_Loggedin: false,
    lastLoginDays : ["Monday","Friday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySymb]);


// change value of object

jsUser.email = "testJitixa@gmail.com"
// Object.freeze(jsUser)
jsUser.email ="jitixachatgpt@gmail.com"

// console.log(jsUser);


// add function

jsUser.greeting = function(){
    console.log("Hello Js Users");
    
}
console.log(jsUser.greeting());


jsUser.greetingTwo = function(){
    console.log(`Hello Js Users , Name is ${this.name} and youe email address is thsi ${this.email}`);
    
}
console.log(jsUser.greetingTwo());







