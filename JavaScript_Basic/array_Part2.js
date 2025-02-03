const fruites = ['apple','manago','banana']
const flowers = ['rose','lily','tulip']

// fruites.push(flowers)

// console.log(fruites);


// const all_data = fruites.concat(flowers)
// console.log(all_data);


const all_new_data = [...fruites,...flowers]
// console.log(all_new_data);



const another_arra = [1,2,3,4,[5,6,7],8,[1,2,3,4],[1,2,8[5,8,7]]]

const another_real_data = another_arra.flat(Infinity)
console.log(another_real_data);



console.log(Array.isArray("Jitixa"));


console.log(Array.from("Jitixa"));


console.log(Array.from({name:"Jitixa"}));  //intresting



let name = "jitixa"
let surname = "sutariya"
console.log(Array.of(name,surname));











