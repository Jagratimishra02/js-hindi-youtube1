const promiseOne = new Promise(function(resolve,reject){
// do async task , DB calls, crpto graphy, network
   setTimeout(function(){
    console.log("Async task is complete");
    resolve()
   },1000) 
})
promiseOne.then(function(){
    console.log("promise completed");
})
     
// new method 
new Promise(function(resolve,reject){
     setTimeout(function(){
       console.log("Async task two completed");
       resolve()
     },1000)
}).then(function(){
    console.log("ASYNC 2 promise resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"jagrati" , email: "jagrati@gmail.com"})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({username: "jagrati", password: "1234"})
        } else{
            reject('Error: something went wrong')
        }
    }, 1000);
})


promiseFour

.then((user) =>{
       console.log(user);
       return user.username
})

.then((username)=>{
     console.log(username); 
})

.catch(function(error){  
    console.log(error);
}).finally(() => console.log("promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = false
    if(!error){
            resolve({username: "jagrati", password: "1234"})
        } else{
            reject('Error: js went wrong')
        }
},1000)
})

// new method
async function consumePromiseFive(){
    try {
        const response = await promiseFive
       console.log(response);
    } catch (error) {
        console.log(error);
    }
}
   consumePromiseFive()