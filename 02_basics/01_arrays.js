// arrays

// const myArray = [1,2,3,4,5]
// const myArray01 = [1,"2",a,true] 
// // elements inside array can be of same datatype or can be of different type also.
  
let myArray1 = [name= "jagrati",
    email = "j@email.com"
]
let myArray2 = myArray1
  myArray2.email = "n@email.com"
console.log(myArray1.email);
console.log(myArray2.email);
// here email present in my array1 changes because myarray2=myarray1 means now they have same reference if we changes myarray2.email myarray1 email also changes


// ++++++++++ similarly +++++++++//
// let myArray1 = [name= "jagrati",
//     email = "j@email.com"
// ]
// let myArray2 = myArray1
//   myArray2.name = "nishi"
// console.log(myArray1.name);
// console.log(myArray2.name);   // doubt


const myArrayA= [1,2,3,4,5]
const mycartoons = ["doremon","shinchan","ninjahatori"]
const myarrayB = new Array(0,1,2,3)
console.log(myArrayA[0]);


// array methods

myArrayA.push(6)
console.log(myArrayA); // now this value is pushed in arrayA

myArrayA.pop() // pop remove the last element 

myarrayB.unshift(8) // unshift add the value "8" which is inside bracket at first

