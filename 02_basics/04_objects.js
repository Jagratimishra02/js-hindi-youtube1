const tinderUser = new Object()
console.log(tinderUser); // empty object, this is singleton object 

const instaUser = {} 
 instaUser.id = "123abc"
// console.log(instaUser); //non singleton object
instaUser.name = "jagrati"
instaUser.isloggedIn = false
console.log(instaUser);

const regularUser = {
    email: "nishu02@gmail.com",
    fullname: {
       userfullname:{
        firstname:"jagrati",
        lastname:"mishra"
       }
    }
}
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4) 
// every element of arrays is displayed in single inverted comas 


const obj3 = {...obj1,...obj2}  // all values are spreaded 
console.log(obj3);

const users = [
    {
        id : 1,
        email : "j@gmail.com"
    },
    {
        id : 2,
        email : "j@gmail.com"
    },
    {
        id : 3,
        email : "j@gmail.com"
    },
]
users[1].email
 console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser)); // imp++ 

console.log(instaUser.hasOwnProperty("isloggedIn"));

const course = {
    coursename:"js in english",
    price: "999",
    courseinstructer:"nishi"
}

// console.log(course.courseinstructer);

const{coursename} = course // this makes the code clean instead of writting course.courseinstructer repeatedly...use this
console.log(coursename);

 const{courseinstructer:instructer} = course
 console.log(instructer);

 // imp react concept****
const navbar = ({company}) => {
console.log(company);
}

//******++++++++json concept +++++++++++ */
// 
//  {
//     "name":"jagrati",
//     "coursename":"french in english"
//     "price": "free"
//  }

//++++++++++++++++++++++++++++++++++
//  [
//     {}
//     {}
//     {}
//  ]