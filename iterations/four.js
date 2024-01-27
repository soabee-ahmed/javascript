//ACCESSING OBJECTS WITH THE HELP OF FOR IN LOOP
const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myobj){
    console.log(`${key} shortuct is for ${myobj[key]}`);     //for accessing a value in object we use objectname[key]
}


//USING FOR IN LOOP IN ARRAY
//when we use for in loop with array than when we used to print key in console.log than it prints keys of the array i.e indeces of the array 
//but  in case of for of loop it prints the values of the array when we use key in conole.log

const programming=["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(key);                                     //0 1 2 3 4 //here it prints keys of the array i.e index of the array
}
for(const key in programming){
    console.log(programming[key]);                                     //here it prints the values of the array
}
//we don't be able to use map with for in loop

