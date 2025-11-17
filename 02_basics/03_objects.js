//sington

// object literals
//Object.create
const [mySym ]= symbol("key1")
const jsUser = {
    name: "jagrati",
    "full name": "jagrati mishra",
  //  mysym: "mykey1",
    age: 20,
    location: "bhopal",
    email: "jagrati@google.com",
    isloggedIn: false,
    lastLoginDays:["monday","saturday"],
     [mySym]: "key" ,
}
console.log(jsUser.email);
console.log(jsUser["email"]);// here we have acces email in strings



console.log;(jsUser["full name"]); // strings like full name should acces like this




//console.log(jsUser.mysym);
//.log(typeof jsUser.mysym); // string but we has given symbol so use brackets


console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);





