let score = "123"

// const {score}=req.body

console.log(typeof score);
//  console.log(typeof (score));
// both above statement r same of console log score 


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)
   


// let score is null // 
 
 score = null //score can be vary without using let only
  console.log(typeof score);
  
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// 123 => 123
// "123abc" => NaN
// true => 1; false =>0
// null => 0
 let isloggedIn = 1
 let answer = Boolean(isloggedIn)
console.log(answer)

// 1 => true ; o => false // converts in boolean
// " " => false 
// "jagrati" => true // in boolean
 let someNumber = 2
 let stringNumber = String(someNumber)
 console.log(someNumber)
 console.log(typeof stringNumber);
 


 //**************** */
 

 let value = 3
//  let negvalue = -value
//  console.log(negvalue);
//  console.log(2+3);
//  console.log(2-3);
//  console.log(2*2);
//  console.log(2**3);
//  console.log(2/3);
//  console.log(2%3);

let str1 = "hello"
let str2 = "world" 
let str3 = str1+str2
 console.log(str3);
 
 console.log("1"+2); //result is 12 because of 1 . "1" is string
 console.log(1+"2"); //result is 12
 console.log(1+2+"3"); //result is 33

console.log(+true); // result is 1 true is converted because of increment.whereas this gives error .
// console.log(true+);


console.log(+"");//empty strings gives false + increment converts so result is 0 

//********** */
  
let gamecounter = 100 
gamecounter++   //++ it increments by 1 this is post fix . ++gamecounter is prefix, both r different 
console.log(gamecounter);
 
 
 