const coding=["js","ruby","java","python","cpp"]
const values=coding.forEach((item)=>{        //for each loop returns nothing so when we execute this code than our output is undefined
    //console.log(item);
    return item                
})
console.log(values)

//filter function
const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.filter((num)=>num>4)
console.log(newnums);

