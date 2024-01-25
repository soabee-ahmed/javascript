//LECTURE =>23 THIS AND ARROW 
const user={
    username:"soabee",
    price:199,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);         //it gives whole current object
    }

}
user.welcomeMessage();     //this points to soabee here  so output is soabee,welcome to website
user.username="sam"        //now this points to sam because current context is updated or changed now
user.welcomeMessage();     //here output is sam,welocome to website

console.log(this);          //{}


function chai(){
    console.log(this);           //it will give info about it 
    let username="soabee"
    console.log(this.username);   //undefined because this is related to object not with function

}

chai()


//ARROW FUNCTION
const chai1=()=>{
    let username="soabee"
    console.log(this)            //{}
}
chai1()
//first way of declaring a function using arrow function
const addTwo=(num1,num2)=>{
    return num1+num2
}
//2 way of declaring a function using arrow function
const addTwo1=(num1,num2)=> num1+num2                    //here it is implicit return so we don't need to write return keyword explicitly
console.log(addTwo(3,5));
console.log(addTwo1(3,5));

const myfun=()=>({username:"soabee"})        //in case of returning an object we have to use curly braces inside simple braces otherwise it will give error
console.log(myfun());
