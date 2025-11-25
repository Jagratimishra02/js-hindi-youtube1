// console.log("n");
// console.log("i");
// console.log("s");
// console.log("h");
// console.log("i");   // this is time consuming method and not much readable


function sayMyname(){
    console.log("n");
    console.log("i");
    console.log("s");                      // this fmethod is readable
    console.log("h");
    console.log("i");
}
sayMyname()



  function addTwoNumbers(number1,number2){
  console.log( number1 + number2);
  }
  addTwoNumbers()   // Nan bcoz there r no arguments means value is not given in n0.1 and n0.2
  function addTwoNumbers(number1,number2){
  console.log( number1 + number2);
  }
  addTwoNumbers(2,4) 
  

////////////////////

  function addTwoNumbers(number1,number2){
  let result = number1 + number2
  return result
  console.log("jagrati"); // unreachable code bcoz return means execution finish
  
  }
  
  const result = addTwoNumbers(3,5) 
 console.log("result:", result);
  
  