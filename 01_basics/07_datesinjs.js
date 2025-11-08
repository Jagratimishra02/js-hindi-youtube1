// dates

let mydate = new Date
console.log(new Date); // it is not readable it gives unreadable random dates
console.log(mydate.toDateString()); // it is slightly readable
console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toString());
console.log(typeof mydate);

// let mycreatedDate = new Date(2025,10,08)
let mycreatedDate = new Date("11-8-2025") // mm-yy-dd format
// let mycreatedDate = new Date(2025,10,08)

console.log(mycreatedDate.toDateString());   // this method gives todays date 

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(mycreatedDate.getTime());
console.log(Date.now()/1000);
// to get dates converted in seconds but these values can also in decimal form .
console.log(Math.floor(Date.now()/1000));// now value is in seconds and without decimal




let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log((newDate.getMonth())+1);// to make it more readable bcoz 0 is january if 1 is added user will get 1 in january
console.log(newDate.getHours());



newDate.toLocaleString('default',{
    weekday:"long" //ctrl+space to grt suggestion on vs code
    
})
