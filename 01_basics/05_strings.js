 const name = "jagrati"
const repocount = 50 
//  console.log(name + repocount + "value");
//  don't use this syntax this syntax is outdatted 

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

//The above syntax is much readable and easy to use //


const gameName = new String('jagrati_sufers')
console.log(gameName[0]);     // value of gamename at 0=j,1=a,


console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());  
//  orignal gameName doesn't change because it is primitive datatype and in primitive datatype data is copied , orignal data remains same 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')
);
const newstring = gameName.substring(0,4)    //here 4th index varies will not inclue only 0,1,2,3 will be there means new string will be "jagr" .here if "-ve" value is given then also it will give answer of "+ve" values
 console.log(newstring);
 
 const anotherString = gameName.slice(-11,10) // here result will be "rati_" here -11th value g is excluded ,for negative value count from backwards
 console.log(anotherString);

 const newStringOne = "   jago's world    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jago.com/jagrati%02mishra"
 console.log(url.replace('%02', '_'))  //replace any value from other here %02 converts to _

console.log(url.includes("jago"))
console.log(url.includes("nishi"))

console.log(gameName.split("_")); //to split the data
