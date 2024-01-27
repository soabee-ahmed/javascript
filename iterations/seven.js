//map=>in map we can perform operations here it is not about boolean values with the help of map we can perform an operation on each and  every elemet of array.
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
const m=newnums=myNumbers.map((num)=>num+10)
console.log(newnums);

//CHAINING OF FUNCTIONS
const newNums=myNumbers
              .map((num)=>num*10)      //[10,20,30,40,50,60,70,80,90,100]
              .map((num)=>num+1)       //[11,21,31,41,51,61,71,81,91,101]
              .filter((num)=>num>40)
console.log(newNums);

