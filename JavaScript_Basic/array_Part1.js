// array    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


const myArr = [0,1,2,3,4]
const fruites = ['apple','manago','banana','graps']
// console.log((fruites[2]));

const myArr2 = new Array(1,2,3,4)
// console.log((myArr2[2]));



// ------------------- Array Method ---------------------------------

myArr.push(5,6)
// console.log(myArr);
myArr.pop()
// console.log(myArr);


myArr.unshift(9)
// console.log(myArr);

myArr.shift()
//console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));




// const newArray = myArr.join()
// console.log(myArr);
// console.log(typeof(newArray));



// Slice and splice

console.log("A  ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);


console.log("B  ",myArr);

const myn2 = myArr.splice(1,3)
console.log("c  ",myArr);
console.log(myn2);











