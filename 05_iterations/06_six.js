const coding = [ 'js' , 'ruby' , 'java', 'python' ,'cpp']


coding.forEach((item) => {
    console.log(item);   
});

//  for each loop doesn't give any value in return

// const values = coding.forEach((item) => {
//     console.log(item);   
//     return
// });
// console.log(values);



// forEach does not return while filter gives returns it can check conditions

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);


// const newNums = myNums.filter((num) => {
//     return num > 4    // for curly braces it is explicit return so use "return"
// })
// console.log(newNums);


const newNums = []
