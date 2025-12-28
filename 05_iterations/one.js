//for

// in order to get multiple curse and edit any word use ctrl+f2  for curse on every common word ,to duplicate curser one at a time use ctrl+d



for (let i = 1; i <= 10 ; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element); 
}


for (let i = 1; i <= 10 ; i++) {
    console.log(`outer loop value: ${i}`);
    
for (let j = 1; j <= 10 ; j++) {
    // console.log(`Inner loop value ${j}and outer loop value ${i}`);
    console.log(i + '*' + j + '=' + i*j);
    
}

}

let myarr = ["batman","spiderman","superman"]
console.log(myarr.length);

for (let index = 0; index < myarr.length;  index++) {         // index<length of my arr bcox index starts from 0
    const element = myarr[index]; 
    console.log(element);  
}


// ++++++++++++ BREAK & CONTINUE ++++++++++


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break 
//     }
// console.log(`value of i is ${index}`);  
   
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue     // ignore once only one value ignored
    }
console.log(`value of i is ${index}`);  
   
}

