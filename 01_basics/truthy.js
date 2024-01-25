const userEmail=[]
if(userEmail){
    console.log("got user email");     //[] (empty array) considers as true value so if block executed
}
else{
    console.log("Don't have user email");
}
//  IMPORTANT NOTES
//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//Truthy values
//"0",'false'," ",[],{},function(){}

//how to check the array is empty or not
if(userEmail.length===0  ){
    console.log("Array is Empty");
}

//how to check that an object is empty or not
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}


//SOME IMPORTANT EXPRESSIONS
console.log(false==0);     //true
console.log(false=='');     //true
console.log(0=='');         //true


//NULLISH COALESCING OPERATOR (??): USED FOR SAFETY CHECK OF NULL AND UNDEFINED
let val;
val=5??10                  //5 first non null and defined values is assigned to variable when we use ?? operator
console.log(val);
let val1=null??10              //10 (first non null or defined value occur is 10)
console.log(val1);
let val2=undefined??15         //15 (first defined value is 15)
console.log(val2);
let val3=null??undefined??40        //40
console.log(val3);