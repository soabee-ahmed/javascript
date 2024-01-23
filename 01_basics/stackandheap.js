//LECTURE=>10 STACK AND HEAP IN JS
//PRIMITIVE(STACK) OR CALL BY VALUE
let myYoutubeName="hiteshchaudharydotcom"
let anotherName=myYoutubeName
anotherName="chaiorcode";
console.log(myYoutubeName)    //hiteshchaudharydotcom
console.log(anotherName);     //chaiorcode


//NON-PRIMITIVE(HEAP) OR CALL BY REFERENCE
let userOne={
    email:"user@google.com",
    upi:"user@ybl" 
}
let userTwo=userOne
userTwo.email="yahoo@gmail.com"
console.log(userOne.email)            //yahoo@gmail.com
console.log(userTwo.email)            //yahoo@gmail.com