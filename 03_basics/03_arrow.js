const user = {
    username: "jagrati",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`); // this means the access to this scope, this.something only valid for object or method(function) inside the object ; this.something can't be used for function
        console.log(this); 
        
    }
}
user.welcomeMessage()
user.username = "nishu" // we can change the context
user.welcomeMessage()

console.log(this); // no context outside the scope so empty

function maggie() {
    let username = "jago"
    console.log(this.username); // undefined bcoz this.something is not valid for function only valid for object or functions inside object
}
maggie()

//++++++++++arrow function +++++++++++++++
const dosa = () => {
    let username = "jagrati"
    console.log(this);
}
dosa() // {} result bcoz this cann't be used in function


//implicit arrow method
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(1,7));
   

// explicit arrow method

const addThree = (num1,num2,num3) => num1 + num2 + num3
console.log(addThree(1,3,4));
            
           // or //
const additionofTwo = (num1,num2) => (num1 + num2)
console.log(additionofTwo);


const addOnes = (obj1,obj2) =>({username:"jagrati"})
console.log(addOnes());
