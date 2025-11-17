const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) // array dc_heros pushed directly to marvel_heros ,means array inside array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // means 1st Element of 3rd Element which is array


// marvel_heros.concat(dc_heros)
// console.log(marvel_heros); // concat makes new array while push works on existing array

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // it concates every element of arrays and convert it into strings
const arrayA = [1, 2, 3,[4, 5, 6], 7, [6,7,[4, 5]]]
const real_arrayA = arrayA.flat(Infinity)
console.log(real_arrayA); // it remove the paranthesis it removes the arrays inside array
//values r spread out
console.log(Array.isArray("jagrati")); // output is false

console.log(Array.from("jagrati"));
console.log(Array.from({name: "jagrati"}));//this array gives empty array 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
