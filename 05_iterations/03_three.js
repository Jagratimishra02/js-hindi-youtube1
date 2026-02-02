//f0r of
// [{},{},{}]
// ["","",""]

const Arr = [1,2,3,4,5]
for (const num of Arr) {   // loop for of {object here refers to a thing}
  console.log(num);
}


const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps


const map = new Map()  // maps has unique value and in same order
map.set('IN',"INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR' , "FRANCE")

console.log(map);
for (const key of map) {
    console.log(key); 
}
for (const [key] of map) {
    console.log(key); 
}
for (const [key,value] of map) {
    console.log(key,':-',value); 
}



//++++++++++++type errr :- my object is not iterable ++++++++++++++++++++++  

// const myobject = {
//     game1:'NFS',
//     game2:'spiderman'
// }

// for (const [key,value] of myobject) {
//     console.log(key, ':-' ,value);
// }