const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)

console.log(Math.PI)          //3.14
Math.PI=5
console.log(Math.PI)          //3.14
const chai={
    name:'ginger chai',
    price:250,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,
    orderChai: function(){
        console.log("chai nhi bni");
    }
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    //writable:false,            //if writable is false so we dont be able to change or override that value
    enumerable:false,            //if enumerable is false than it do not display that value
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){
        console.log(`${key}:${value}`);
    }
}