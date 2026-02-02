const myobject = {
    js: 'javascipt',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
}
// for in loop can be used for objects bcoz for of loop can't be used in object 


const programming = [ 'js' , 'ruby' , 'py', 'java' ,'cpp' ]
for (const key in programming) {
    // console.log(key);   // keys 0,1,2,3,4 will get print

    console.log(programming[key]);
    
}




// +++++++++++++for in loop in map++++++++++++



const map = new Map()  // maps has unique value and in same order
map.set('IN',"INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR' , "FRANCE")
for (const key in map) {
console.log(key);
}

// map is not iterable so loop doesn't work