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

//LECTURE=>8 COMPARISON OF DATATYPES IN JS

console.log("2">1);           //true
console.log("02"<1);           //false
//because it automatically converts string datatype i.e "2" or"02"  to integer for comparison

console.log(null>0)             //false
console.log(null==0)             //false
console.log(null>=0)             //true
//NOTE: the reason of above output is that an equality check(==) and comparison >,<,>=,<= work differently 
//comparison convert null to a number ,treating it as 0 . that's why null>=0 is true & null>0 is false.

console.log(undefined==0)            //false
console.log(undefined>0)             //false
console.log(undefined<0)             //false

//strict equality check(===)  : it do not convert automatically one datatype to another for comparison
console.log("2"===2)                 //false
