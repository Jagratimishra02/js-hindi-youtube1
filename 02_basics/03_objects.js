//sington

// object literals
//Object.create
const mySym = Symbol("key1")
const jsUser = {
    name: "jagrati",
    "full name": "jagrati mishra",
  [mySym] : "mykey1",
    age: 20,
    location: "bhopal",
    email: "jagrati@google.com",
    isloggedIn: false,
    lastLoginDays:["monday","saturday"],
      
}
console.log(jsUser.email);
console.log(jsUser["email"]);// here we have acces email in strings 

console.log;(jsUser["full name"]); // strings like full name should acces like this

//console.log(jsUser.mysym);
//.log(typeof jsUser.mysym); // string but we has given symbol so use brackets


console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]); // this gives the value inside mysym which is "mykey1" which is string type
console.log(typeof mySym);// type is symbol

jsUser.email = "jago@google.com" // object is freeze 
Object.freeze(jsUser)
 jsUser.email = "jagrati@microsoft.com"  // email will not change bcoz it is freezed
console.log(jsUser);



