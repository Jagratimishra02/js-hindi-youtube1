// primitive 


// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3
const isLoggedIn =false
const outsidetemp = null
let userEmail; //undefined value 
 
const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id === anotherId);
  // symbols is a unique declaration of any object 
const Bignumber = 466675577856n



// array,objects,functions
 

const heros = ["Superman","Ironman","spiderman"] //arrays
 let myobj = {
    name: "jagrati",
    age : "20",
 }
  const myfunction = function(){
    console.log("Hello world");
    }

    console.log(typeof Bignumber);
    console.log(typeof isLoggedIn);
    console.log(typeof outsidetemp);
    console.log(typeof myfunction);
    console.log(typeof id);


//********** */
    // stack(primitive),heap(non-primitive)

    let myyoutubename = "nish02"
    let anothername = myyoutubename
    anothername = "jagrati02"
    console.log(anothername);
    
let userOne = {
      email: "user@google.com",
     upi: "user@ybl"
}
let usertwo = userOne
usertwo.email = "jagrati@google.com"
console.log(userOne.email);
console.log(usertwo.email);


