// Immediately Invoked function expression (iife)

// function maggie() {
//     console.log(`DB connected`);
// }
// maggie()
       

//++++++++++++++++++++++++++++++++++//
//global scopes created problem so to overcome this problem we use iife 

(function coffee() {
    console.log(`DB connected`);
})()

()()


