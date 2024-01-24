const myArr=[0,1,"soabee",2,3,4,5,7]
console.log(myArr);            
console.log(myArr[2]);         //soabee
const myarr2=new Array(1,2,3,4)
console.log(myarr2); 

//array methods

myarr2.push(5)                 //add element at last
myarr2.push(6) 
myarr2.pop();                  //remove element from last
console.log(myarr2)

myarr2.unshift(9)              //add element at the front of the array
console.log(myarr2); 
myarr2.shift()
console.log(myarr2);           //removes  element from  the front of the array

console.log(myarr2.includes(4));   //true
console.log(myarr2.indexOf(9));    //-1
console.log(myarr2.indexOf(3));    //2

const arr=myarr2.join();                //join() converts array to string
console.log(myarr2);                  //[1,2,3,4,5]
console.log(arr);                    //1,2,3,4,5

//slice ,splice method in js
console.log("A ", myarr2);   
const myn1=myarr2.slice(1,3) 
console.log(myn1);
console.log("B ",myarr2);   

const myn2=myarr2.splice(1,3)
console.log(myn2)
console.log("C ",myarr2)
//IMPORTANT
//the difference betweem slice() and splice() is that slice don't include upper range but splice includes
//and slice do not affect the original array but splice will cut down or remove the given range from the original array.

//LECTURE =>15 ARRAYS PART 2
const marvel_heros=["thor","Ironman","spiderman"]
const  dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)       //it makes nested array means at 3 index it insert whole dc_heros.

console.log(marvel_heros)
//console.log(marvel_heros[3][1])    //flash   //with the help of this statement we can access nested array elements.
//marvel_heros.concat(dc_heros)       //this will also do the same work as push operation does above
console.log(marvel_heros)
const allheroes=marvel_heros.concat(dc_heros) //now merging is normal here no any nested array is formed means this is the line by which we can merger two arrays normally
console.log(allheroes);

//but for merging 2 arrays we use spread operator eg given below
const all_new_heros=[...marvel_heros,...dc_heros]   //generally we use this way for merging 2 arrays
console.log(all_new_heros)               
//flat() :- used for flattening of array if there is any nested array we can make it non nested (normal array) by the help of flat() function
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]] //here depth is 2 so we pass 2 as argument in flat so that it can flat upto depth 2
const real_another_array=another_array.flat(2);   //we can also pass infinity in flat it can automatically flat the array.
console.log(real_another_array)

console.log(Array.isArray("soabee"))    //isArray(): checks that whether it is array  or not
console.log(Array.from("soabee"))       //['s','o','a','b','e','e']   from()  converts the given argument of from to array


let sc1=100
let sc2=200
let sc3=300

console.log(Array.of(sc1,sc2,sc3));     //Array.of(set of elements)   also used for making an array of given set of elements
