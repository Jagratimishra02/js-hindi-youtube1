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
 console.log(user.getuserdetails()); // it is function so callback needed
 console.log(this); // {}= output


 // new is constructer function  
 const promiseOne = new promise ()
 const date = new date ()  
            
 function user2(username , loginCount , isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;
    return this
 }

 const userOne = user("krpansh" , 12 , true)
console.log(userOne);


 

 
 