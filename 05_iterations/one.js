//for

// in order to get multiple curse and edit any word use ctrl+f2  for curse on every common word ,to duplicate curser one at a time use ctrl+d



for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element); 
}


for (let i = 0; i <= 10 ; i++) {
    console.log(`outer loop value: ${i}`);
    
for (let j = 0; j <= 10 ; j++) {
    console.log(`Inner loop value ${j}and outer loop value ${i}`);
}    
}
