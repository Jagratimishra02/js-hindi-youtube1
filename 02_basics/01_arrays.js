// arrays


/// ++++++ javascript arrays-copy operations create shallow copies means it share same reference //




// const myArray = [1,2,3,4,5]
// const myArray01 = [1,"2",a,true] 
// // elements inside array can be of same datatype or can be of different type also.
  
let myArray1 = [name= "jagrati",
    email = "j@email.com"
]
let myArray2 = myArray1
  myArray2.email = "nishi@google.in"
console.log(myArray1.email);
console.log(myArray2.email);
// here email present in my array1 changes because myarray2=myarray1 means now they have same reference if we changes myarray2.email myarray1 email also changes


// ++++++++++ similarly +++++++++//
let myArraydemo_1 = [name= "jagrati",
    email = "j@email.com"
]
let myArraydemo_2 = myArraydemo_1
  myArraydemo_2.name = "nishi"
console.log(myArraydemo_1.name);
console.log(myArraydemo_2.name);   // doubt


const myArrayA= [1,2,3,4,5]
const mycartoons = ["doremon","shinchan","ninjahatori"]
const myarrayB = new Array(0,1,2,3)
console.log(myArrayA[0]);


// array methods

myArrayA.push(6)
console.log(myArrayA); // now this value is pushed in arrayA

myArrayA.pop() // pop remove the last element 
console.log(myArrayA)

myArrayA.unshift(8) // unshift add the value "8" which is inside bracket at first
console.log(myArrayA)


myArrayA.shift()
console.log(myArrayA) // shift remove the first element of array

console.log(myArrayA.includes(9))
console.log(myArrayA.indexOf(9)) // result is -1 which indicates that the value is not present


const newArr = myArrayA.join()
console.log(myArrayA);
console.log(newArr);
console.log(typeof newArr) // type of newArr is string bcoz of ".join" it binds it and converts it into string



// slice, splice //
console.log(myArrayA)

const myn1 = myArrayA.slice(1,4)
console.log(myn1);

const myn2 = myArrayA.splice(1,4)
console.log(myn2);
console.log(myArrayA);  // splice manupulates the orignal array



