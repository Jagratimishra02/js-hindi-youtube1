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

// myNums.forEach((Num) => {
//     if (Num>4){
//         newNums.push(Num)
//     }
// });
// console.log(newNums);


const books = [
    { title : 'book one'   , genre : 'fiction'     , publish : 1981 , edison : 2004 },
    { title : 'book two'   , genre : 'non-fiction' , publish : 1992 , edison : 2008 },
    { title : 'book three' , genre :  'History'    , publish : 1999 , edison : 2007 },
    { title : 'book four'  , genre :'non-fiction'  , publish : 1989 , edison : 2010 },
    { title : 'book five'  , genre : 'science'     , publish : 2009 , edison : 2014 },
    { title : 'book six'   , genre : 'fiction'     , publish : 1987 , edison : 2010 },
    { title : 'book seven' , genre : 'History'     , publish : 1986 , edison : 1996 },
    { title : 'book eight' , genre : 'science'     , publish : 2011 , edison : 2016 },
    { title : 'book nine'  , genre : 'fiction'     , publish : 1981 , edison : 1989 } 
];
 

let userBooks = books.filter( (books) =>books.genre === 'History' )
console.log(userBooks);


 userBooks = books.filter((books) =>books.publish >= 1995)
console.log(userBooks);



userBooks = books.filter((books) => {return books.publish >= 2000})
console.log(userBooks);  // bcoz of{} write return 




userBooks = books.filter((books) => books.publish >= 2009)
console.log(userBooks);


userBooks = books.filter((books) => books.publish >= 1995 && books.genre === 'History' )
console.log(userBooks);
