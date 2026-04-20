const user = {
    username: "jagrati",
    loginCount: 8,
    signedIn: true,

    getuserdetails: function(){
        // console.log("got username from database");
        console.log(this); // this refers current context
        console.log(`username:${this.username}`);
    }
}
 console.log(user.username);
//  console.log(user.getuserdetails()); // it is function so callback needed
//  console.log(this); // {}= output


 // new is constructer function  
//  const promiseOne = new promise ()
//  const date = new date ()  
            
 function user2(username , loginCount , isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;
    return this
 }

 const userOne = new user2("krapansh" , 12 , true)
 const userTwo = new user2("jagrati" , 2 , true)
console.log(userOne);
console.log(userOne.constructor); // [function: user2] it gives its refrence
console.log(userTwo);
console.log(userOne instanceof user2); // gives instance "check"




 

 
 