//reduce
const myNums = [1,2,3]


const initialvalue = 0;
const sumwithinitial = myNums.reduce((accumulator, currentvalue) => accumulator + currentvalue,initialvalue);
console.log(sumwithinitial);


const mytotal = myNums.reduce(function(accumulator,currentvalue){
    console.log(`accumulator: ${accumulator} and current value: ${currentvalue}`); // to check values in accumulator and current value
    return accumulator + currentvalue
},3)
console.log(mytotal);


const shoppingCart = [
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemname:"data science course",
        price:12999
    }
]
const pricetotal = shoppingCart.reduce((accumulator,itemname) => accumulator + itemname.price, 0);
console.log(pricetotal); 

