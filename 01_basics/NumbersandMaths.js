const score=400
console.log(score);

const balance=new Number(400)       //here type also specified with number because it is object
console.log(balance.toString().length);
console.log(balance.toFixed(2));            //tofixed function restrict the number of digits after decimal here output is 400.00 

const otherNumber=123.644454
console.log(otherNumber.toPrecision(3));      //toprecision() method do precision on the basis of number passes in argument here 123.6=124

const hundereds=10000000
console.log(hundereds.toLocaleString());            
console.log(hundereds.toLocaleString('en-IN'));     //it put comma according to indian system in our number


//***********************************MATHS**************************************
console.log(Math)
console.log(Math.abs(-5))                     //5
console.log(Math.round(-5.6))                 //-6
console.log(Math.floor(-5.3))                 //-6
console.log(Math.ceil(-5.4))                  //-5
console.log(Math.min(4,3,6,8))                // 3 it finds the minimum number in an array
console.log(Math.max(4,3,6,7))                //7  it finds  the maximum number in an array

console.log(Math.random())                    //Math.random() method gives random values in between 0 and 1
console.log(Math.floor(Math.random()*10)+1);  //it gives value in between 1 and 10
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))   

