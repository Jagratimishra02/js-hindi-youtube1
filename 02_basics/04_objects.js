const tinderUser = new Object()
console.log(tinderUser); // empty object, this is singleton object 

const instaUser = {123abc} 
const instaUser.id = ""
console.log(instaUser); //non singleton object
