const userEmail = "j@jago.ai"
if (userEmail) {
console.log("got userEmail");
} else {
    console.log("dont have userEmail");
}

const usergmail = ""  // for empty strings value is false so else is executed 
if (usergmail) {
console.log("got usergmail");
} else {
    console.log("dont have gmail");
}


const usermail = [] // for array value is true so if executed nd result is got usermail
if (usermail) {
console.log("got usermail");
} else {
    console.log("dont have usermail");
}

//falsy values :- 0,-0,"",Bigint,null,undefined,NaN


// truthy values :- "0"," ","undefined",{},[],function (){}
 

if (usermail.length===0) {
    console.log("array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {  
console.log("obj is empty");
}

// nullish coalescing operater (??) : NULL UNDEFINED

let val1;
// val1 = 5 ?? 10                      // output = 5
// val1 = null ?? 10                   //output = 10
// val1 = undefined ?? 15              //output = 15
val1 = null ?? 10 ?? 12                //output = 10

console.log(val1);

// terniary operator
// conition ? true : false 


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


