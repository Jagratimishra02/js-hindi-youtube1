function h(){
    console.log("hello");
}
function m(){
    console.log("mello");
}
// setTimeout(h,3*1000);  
// setTimeout(m,1*1000);

// // method 2 comment added
// setTimeout(function (){
//     console.log("hii");
// },3*1000);  
// setTimeout(function (){
//     console.log("hey");
// },1*1000);

// timer created
for(let i = 0 ; i <= 10 ;i++){
    setTimeout(function (){
        console.log(i);
    },i*1000);
}