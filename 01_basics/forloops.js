//JUMPING STATEMENTS
//BREAK STATEMENT
for(let i=1;i<=10;i++){
    if(i==5){
        console.log("detected 5");
        break;                    //here it breaks the loop and control goes out of the loop and after detected 5 statement no any statement is executed
    }
    console.log(`value of i is ${i}`);
}
//CONTINUE STATEMENT
for(let i=1;i<=10;i++){
    if(i==5){
        console.log("detected 5");
        continue;                    //here it skips one iteration i.e it skips all the statements present after detected 5 and continues with the next iterations.
    }
    console.log(`value of i is ${i}`);
}

//NESTED LOOPS
for(let i=1;i<=10;i++){
    console.log(`outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        console.log(`inner loop value ${j} and outer loop ${i}`);
    }
}