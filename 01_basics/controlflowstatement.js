//LECTURE=>25 CONTROL FLOW STATEMENTS
//if else if else statements
let balance =1000
if(balance<500){
    console.log("less than 500");
}
else if(balance<750){
    console.log("less than 750");
}
else if(balance<900){
    console.log("less than 900");
}
else 
    console.log("less than 1200");



//SWITCH STATEMENT
/*
switch(key){
    case value1:
        break;
    case  value2:
        break;
    default:
        break;
}
*/
//example
let month=12
switch(month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("sep");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("november");
        break;
    default:
        console.log("december");
}
