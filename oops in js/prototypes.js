let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.soabee=function(){                     //as soabee() function is declared in prototypes so it is accessible by all the array,string,function because it is declared in upperlevel of hierarchy
    console.log(`soabee is present in all objects`);    //we added a new property in object 
}
heroPower.soabee();
myHeros.soabee()

Array.prototype.heySoabee=function(){
    console.log(`soabee says hello`);
}
myHeros.heySoabee();
// heroPower.heySoabee();                    //it gives error because heySoabee() is declared in the lower level of hierarchy so it is not pass to other objects like strings and functions
    
//INHERITANCE
const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:"JS assignment",
    fullTime:true,
    __proto__:TeachingSupport             //it inherits TeachingSupport
}

Teacher.__proto__=User                    //User is also available in Teacher now
//modern syntax
//Object.setPrototypeOf(TeachingSupport,Teacher)


//eg for trueLength example
let anotherUsername="chaiorcode    "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()