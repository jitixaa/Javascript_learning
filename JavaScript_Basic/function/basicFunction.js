function myFirstFunction(){
    console.log("Hello World");
    
}
myFirstFunction()


// function addTwoNumber(no1,no2) // Parameters
// {
//     console.log(no1 + no2);
    
// }
// const addnumber = addTwoNumber(3,5) // argumnets
// return addnumber


function addTwoNumber(no1,no2) // Parameters
{
    // let result = no1 + no2;
    // return result
    return no1 + no2
}
const result = addTwoNumber(5,8)
// console.log(`Sum Two Number Result ${result}`);


function loginUserMessage(username = "jitixa"){
    if(!username){
        console.log("Please Enter Username");
        return
        
    }
    return `${username} just login`
}
// console.log(loginUserMessage("hello login"));
// console.log(loginUserMessage("test"));


// Shopping cart multiple arg


function calculateCartPrice(){
    
}


