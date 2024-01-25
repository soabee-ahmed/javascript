//LECTURE=> 19 FUNCTIONS
//FUNCTION DECLARATION AND DEFINITIONS
function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
const result=addTwoNumbers(4,5)    //9
console.log("Result: ", result)    //Result: undefined  //this is because inside functioon we do not return any value we do only console.log so function do not return any value that's why it give undefined

function addTwoNumber(number1,number2){
    let res=number1+number2        //this variable res have scope only inside the function
    return res;
}
const res=addTwoNumber(4,5)    //9    this variable  res have a global scope
console.log("Result: ", res)   //Result: 9 //here 9 comes because we return the value 9 using return keyword

function loginUserMessage(username="sam"){          //default argument
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("soabee"))
console.log(loginUserMessage());                  //if we do not pass any argument inside function than it will take input as undefined and it execute if block for the solution of this problem we have a concept of default argument now it prints sam just logged in


//LECTURE =>20 FUNCTIONS PART2

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))      //it will give array of all values passed as argument because we use rest operator(...) in function parameter

function calculateCartPrice1(val1,val2,...num1){
    return num1                                        //now in num1 array the values after first 2 values passed as argument will go inside the array .
}
console.log(calculateCartPrice1(200,400,500,2000))     //[500,2000]  first 2 values cosidered as val1,val2 and rest others are going inside num1 array.

//passing object as argument inside function
const user={
    username:"soabee",
    prices:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
handleObject(user)
handleObject({username:"sam",prices: 400})

//passing array as argument inside function
const arr=[10,20,300,400]
function returnSecondElement(myArray){
    return myArray[1]
}
console.log(returnSecondElement(arr))      //20
console.log(returnSecondElement([100,200,300,400]));