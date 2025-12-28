//if

// if (true){

// }

const isUserloggedIn = true
const temperature = 21
if (2 == "2") {                 
    console.log("executed");  // it will execute
}
if (2 === "2") {              // === is a strict it  also check the type of data type 
    console.log("executed");  // it will not execute
}
if ( temperature < 50 ) {                 
    console.log("less than 50");
}
     else {
         console.log("temperature is greater than 50");
    }           // if we use both if/else one statement can be executed only
    console.log("executed"); // it will execute in every condition 
    
// operations :- <,>,<=,>=,!=, === , !==

const score = 200 
if (score > 100) {
    const power = "fly"
    console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`);  // scope cannot the values outside 


//  //++++++++++++++or++++++++++
// const balance 
//  if (balance > 50) console.log("test"),
//  console.log("test2"); // unreadable code 

const balance = 1000
  if (balance < 500) {
    console.log("less than 500");
  } 
      else if (balance < 750) {
    console.log("less than 750");
  } 
      else if (balance < 1000) {
        console.log("less than 1000");
      }
 else {
    console.log(" balance is greater than or equal to 1000");      // result will be less than or equal to 1200
 }

 const UserloggedIn = true
 const debitcard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true
 if (UserloggedIn && debitcard && 2==2) {                    // to check all condition use &&
  console.log("allow to buy courses");
 } 
if (loggedInFromGoogle || loggedInFromEmail) {      // to execute even if one of the value is true 
console.log("user logged in");
 }