const user={
    username:"soabee",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
         console.log("got user details from database");
         console.log(`Username: ${this.username}`);
         console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);                     //{} here this point to empty braces

//CONSTRUCTOR FUNCTION
function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;                 //either we write or not because return this is implicitly added to our code if we do not write it
}
const userOne=User("hitesh",12,true)     //if we do not write new keyword than 
const userTwo=User("soabee",11,true)     //next statement override it
console.log(userOne);

const userO=new User("hitesh",12,true)      
const userT=new User("soabee",11,true)     
console.log(userO);
console.log(userO.constructor);             //it gives us reference of function user
/*
NEW KEYWORD
Firstly an empty object is created which is called as an instance
secondly constructor function is called and wrap all arguments
and then it put that wrapped arguments into an empty object.*/
