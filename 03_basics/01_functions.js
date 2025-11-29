// console.log("n");
// console.log("i");
// console.log("s");
// console.log("h");
// console.log("i");   // this is time consuming method and not much readable


function sayMyname(){
    console.log("n");
    console.log("i");
    console.log("s");                      // this method is readable
    console.log("h");
    console.log("i");
}
sayMyname()



  function addTwoNumbers(number1,number2){
  console.log( number1 + number2);
  }
  addTwoNumbers()   // Nan bcoz there r no arguments means value is not given in n0.1 and n0.2
  function additionTwoNumbers(number1,number2){
  console.log( number1 + number2);
  }
  additionTwoNumbers(2,4) 
  

////////////////////

  function addTwoNumbers(number1,number2){
  let result = number1 + number2
  return result
  console.log("jagrati"); // unreachable code bcoz return means execution finish
  
  }
  
  const result = addTwoNumbers(3,5) 
 console.log("result:", result);
  
 function loginusermessage(username) {
  return `${username}justlogged in`
 }
 console.log(loginusermessage("jagrati"));

// result :- jagrati just logged in



function loginusermessage(username) {
  return `${username}justlogged in`
 }
 console.log(loginusermessage("")); // result will be :- just logged in
 console.log(loginusermessage()); // undefined just logged in


 // ++++++++ to check username is defined or not +++++//
 
  
 function loginusernotification(username) {
  if (username === undefined) {
  console.log("please enter the username");
   return
  }
  return `${username}justlogged in`
 }
 console.log(loginusernotification());


 //###############

 function loginuserpopup(username) {
   if (!undefined) {
    console.log("please give values");
    return
  }
  return `${username}justlogged in`
 }
 console.log(loginuserpopup());



 function loginpopup(username = "nishu") {
   if (!undefined) {
    console.log("please give values");
    return
  }
  return `${username}justlogged in`
 }
 console.log(loginpopup());
  console.log(loginpopup("jago")); //automatic jago will be overwrite automatically


//+++++++++++++++++++++++++++++++++++++++++


function calculateCartPrice(...num1) {
  return num1
}
console.log(calculateCartPrice(200,500,600));  
 //  all the prices r added bcoz of ...num1 "... 3 dot this rest operator"


function calculatenewCartPrice(value1,value2,value3,...num1) {
  return num1
}
console.log(calculatenewCartPrice(200,500,600,900,3000)); // 200,500,600 is stored in value1,value2,value3 rest is stored in array of num 1

const user = {
  username: "nishi",
  price: 199
}
function handleobject(anyobject) {
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)
  
//another method to call object

handleobject({
  username : "jago",
  price : 400
})

const myNewArray = [200,300,400,500]
function returnsecondvalue(getarray) {
  return getarray[2]
}
console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([200,300,400,500]
));
