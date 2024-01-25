//LECTURE=> 21 SCOPES OF VARIABLES
var c=300                //ambuiguity here so that's why we avoid var while declaring variable .
let a =300                //now a is global so it is normal
if(true){
    let a=10
    const b=20
    var c=30
}
//console.log(a);           //we do not use a here because it is declared with let keyword  so it has block scope
//console.log(b);           //we also do not use b here because it is declared with const keyword so it has block scope
console.log(c);           //we can use c because it is declared with var keyword and it has global scope
/*Note: Sometimes, users face problems while working with the var variable as they change its value of it in a particular block. So, users should use the let and const keywords to declare a variable in JavaScript. */
console.log(a)             //300 after declaring a gloabal let a=300


//LECTURE=> 22 SCOPE LEVEL AND MINI HOISTING IN JS
function one(){
    const username="soabee"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)                     //here error occurs
    two()
}
one()

if(true){
    const username="soabee"
    if(username==="soabee"){
        const website="youtube"
        console.log(username+website);
    }
    //console.log(website);              //here error occurs because website is going to be out of scope
}
//console.log(username)                 //here error occurs because  username is going to be out of scope

//******************************Interesting*************************
addone(5)
function addone(num){
    return num+1
}

addTwo(5)
const addTwo=function(num){
    return num+2
}
