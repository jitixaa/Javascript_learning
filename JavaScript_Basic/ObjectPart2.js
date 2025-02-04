// Singletone Object

const tinderUserOne = new Object()
// console.log(tinderUserOne);

// Non Single tone object

const tinderUser = {}

tinderUser.id ="123"
tinderUser.name ="jitixa"
tinderUser.isLoggedIn = false

// console.log(tinderUser);



const regularUser = {
    email : "jitixa@gmail.com",
    fullname :{
        userfullname :{
            name : "jitixa",
            surname :"Sutariya"
        }
    }
}
// console.log(regularUser.fullname.userfullname.name);


//Object Combaine

const obj1 = { 1 : "a", 2 :"b"}
const obj2 = { 3 : "a", 4n :"b"}


// const obj3 = {obj1,obj2}
// console.log(obj3);


// const returnedTarget = Object.assign({},obj1, obj2);

const obje3 = {...obj1,...obj2}
// console.log(obje3);


// value come in database

const users =[
    {
    id:1,
    email:"test@gmail.com"

},
{
    id:2,
    email:"test2@gmail.com"

},
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//=============================== destructure ===============================================

const Course = {
    coursename : "javascript",
    price : 2000,
    author:"jitixa"
}
//destructure define
const {coursename:name} = Course
console.log(name);


// ============================ json ====================================

[
    {},
    {},
    {}
]






