
var c = 300

if (true) {
    let a = 10
    const b=20
    c = 30 
}

// console.log(a);
// console.log(b); // these elements  should not be available outside the block scope , value inside the scope should not be access outside the block scope

console.log(c);
// c will be 30 instead of 300 becoz of var 300 so don't use var


let boya = 100
const boyb = 200
var boyc = 300
  
if (!false) { 
    let boya = 10 
    
}
console.log(boya); // it will access value 100 not 10 bcoz value should not accessed outside the block scope

var smartphones = 20000
const price = 50000
if (true) {
let smartphones = 100
const price = 40000
console.log("Inner:",smartphones);
}
console.log(smartphones);
// value inside inner is 100 while outside 20000


// for (let i = 0; i < Array.length; i++) {
//     const elements = Array[i];
// }


function one() {
    const username = "jagrati"

    function two() {
        const website = "youtube"
        console.log(username);  
        
    }
    // console.log(website);//this line will not execute outside

    two()
    
}
one()


if (true) {
    const username = "jagrati"
    if (username === "jagrati") {
        const website = "youtube"
        console.log(username + website); 
    }
    // console.log(website);  // value outside the scope can't be accessed
}
// console.log(username);


//++++++++++++++ imp  ++++++++++


console.log(addOne(5))

function addOne(num) {
    return num + 1
}
//  addTwo(5)        // this can't be accessed , don't use the function before declaration

 const addTwo = function(num){
    return num + 2
 }
addTwo(5)
console.log(addTwo); // output => [Function: addTwo]
