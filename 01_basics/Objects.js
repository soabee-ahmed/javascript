//LECTURE=>16 OBJECTS
const mysym=Symbol("key1")
const jsUser={
    name:"soabee",
    "full name": "Soabee Ahmed",
    [mysym] :"mykey1",
    age:18,
    location:"chandigarh",
    email: "soabee@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.email)        //there are 2 ways of accessing array  elements first is with dot(.) operator
console.log(jsUser["email"])     //second is using [square brackets]
console.log(jsUser["full name"])
console.log(jsUser.mysym)
console.log(typeof jsUser.mysym)    //string // so here it means it is not used as symbol
console.log(jsUser[mysym])      //mykey1

//how to update value of an object
jsUser.email="soabee@chatgpt.com"  //it updates the value of email in object jsUser
//Object.freeze(jsUser);              //it freezes the object now we can't able to  update any element of object as it is now freezed.
jsUser.email="soabee@google.com"     //this line is redundant as it dont change email
console.log(jsUser);

//function inside object
jsUser.greeting=function(){
    console.log("Hello JS user")
}
console.log(jsUser.greeting());
console.log(jsUser.greeting);          //we get reference here

jsUser.greetingTwo=function(){
    console.log(`HELLO JS USER ${this.name}`);    //this points to the current object
}
console.log(jsUser.greetingTwo())

//LECTURE=>17 OBJECTS PART2
const tinderUser1=new Object()     //singleton object
const tinderUser={}              //Non Singleton object
tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false
console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "soabee",
            lastname:  "ahmed"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
const obj4={obj1,obj2}     //here problem ocuurs 
console.log(obj4);
const obj5=Object.assign({},obj1,obj2,obj3)     //assign(target,source) is used for  mergin multiple objects into a single object {} braces is the target and all other after {} are source objects which are used to merge.
console.log(obj5)
const obj6={...obj1,...obj2,...obj3}       //we  generally use spread operator for merging multiple objects 
console.log(obj6);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLoggedIn"))