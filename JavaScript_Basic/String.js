const name ="Jitixa-a"
const repoCount = 50

// console.log(`Hello My name is ${name} and my Repo Count ${repoCount}`);
// console.log(name[0]);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(2));
// console.log(name.indexOf('t'));

const newString = name.substring(0,4)
console.log(newString);

const slicestring = name.slice(-4,5)
console.log(slicestring);

// ---------------------https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim---------------------

const TrimString = "    jitixa    "
console.log(TrimString);

console.log(TrimString.trim());



//Replace string

const replaceString = "test.com/jitixa%20test"

console.log(replaceString.replace('%20','-'));


