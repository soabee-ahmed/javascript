console.log("Soabee")
const accountId=134243
let accountEmail="soabee@gmail.com"
var account_balance=9000.87
let account_city;
console.table([accountId,accountEmail,account_balance,account_city])
let age=18;
let isLoggedIn=false;
let state=null;
let currentState;
console.log(typeof state);
console.log(typeof currentState);
console.log(typeof undefined)  //undefined
console.log(typeof null);       //object    
console.log(typeof age);

//lecture =>6     CONVERSION OF DATATYPES
let score="33"

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let score1="33abc"

let valueInNumber1=Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

//lecture =>7    CONFUSION OF STRING TO NUMBER CONVERSION
let str1="hello";
let str2=" soabee"
console.log(str1+str2);   //hello soabee

console.log("1"+2);       //12
console.log(1+"2");      //12
console.log("1"+2+2);    //122
console.log(1+2+"2");   //32

console.log(true);        //true
console.log(+true);       //1
console.log(+"");         //0

let num1,num2,num3
num1=num2=num3=2+2;       //valid in js but it is not a good approach
console.log(num1);     
console.log(num2);
console.log(num3);