const score = 400
console.log(score)

const balance = new Number(100)//here automatically changes into number
console.log(balance);

console.log(balance.toString().length); // by this method we can see the length .here length of 100 is 3


console.log(balance.toFixed(2)); // this fix the number of digit after the decimal


const othernumber = 123.8966
console.log(othernumber.toPrecision(4));
const hundreds = 1000000
console.log(hundreds.toLocaleString()); // it gives the us representation means 1,000,000 like this
console.log(hundreds.toLocaleString('en-IN')); // this gives the indian value representation of data eg:-10,00,000

// +++++++++++ Maths +++++++++ //
console.log(Math);
console.log(Math.abs(-4)); //here -ve value changes to +ve
console.log(Math.round(4.5)); // result is 5
console.log(Math.round(4.5));

console.log(Math.ceil(4.2)); // ceil round up to greater values
console.log(Math.floor(4.9));//floor round up to smaller number
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random()); // it gives the random value between (0 t0 1)



console.log(Math.floor(Math.random()*10)+1); // to get round up smaller values
console.log((Math.random()*10)+1);

// what if the random value comes 0.09876 then the value becomes zero to use this method in game add 1 so the value will never be 0


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)+min)) // through this min value always remain between 10 and 20

