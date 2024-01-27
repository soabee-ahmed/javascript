//reduce function
//with the help of regular function
const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},0)
console.log(myTotal);

//reduce function 
//with the help of arrow function

const mytotal=myNums.reduce((acc,num)=>acc+num,0)
console.log(mytotal);

//shopping cart example
const shoppingCart=[
    {itemName:"js course",
    price: 2999},
    {itemName:"python course",
    price: 3999},
    {itemName:"c++ course",
    price: 4999},
    {itemName:"java course",
    price: 5999},
]
const totalPrice=shoppingCart.reduce((acc,item)=>(item.price+acc),0)  //it sums the all courses price
console.log(totalPrice);              
