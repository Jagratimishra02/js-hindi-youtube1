const coding = [ 'js' , 'ruby' , 'java', 'python' ,'cpp']



// fuction in for each is call back function so name is not written
coding.forEach( function (val){
console.log(val);
})


//++++++++ arrow function +++++++++
// coding.forEach ((item) => {console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

  coding.forEach ((items,index,array) => {
    console.log(items,index,array);
  })

  const mycoding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    },
    {
        languageName: "java",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    },

  ]
  mycoding.forEach( ( item) => {
    console.log(item.languageName);

  })