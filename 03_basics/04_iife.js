// Immediately Invoked function expression (iife)

function maggie() {
    console.log(`DB connected`);
}
maggie();
       

//++++++++++++++++++++++++++++++++++//
// global scopes created problem so to overcome this problem we use iife 

(function coffee() {                   // named iffe which has name coffee
    console.log(`DB connected`);
})();

//semicolon is imp otherwise code will behave as a continuation nd throw error

( () => {
    console.log(`db connected 2`);
})() ;  // arrow function can also  be executed by iife


// +++++++++++++ iife syntax ()()  if u r using multiple iifi use semicolon to end 


( (name) => {                            // unnamed iife
  console.log(`db connected 3 ${name}`);                         
})('nishu');