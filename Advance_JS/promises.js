//promises creation
const promiseOne=new Promise(function(resolve,reject){
    //do any async task
    //db calls, cryptography,network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000);
})
//then function is associated with resolve means when promise is resolved then then() will be executed
promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    //do any async task
    //db calls, cryptography,network
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(function(){
    console.log("async 2 resolved");
})
//if we want to get some data like object from promise than we can pass them inside the resolve() function.
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai",email:"chai@example.com"})},1000)
    })
    promiseThree.then(function(user){
        console.log(user);
    })

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"soabee",password: "123"})
        }
        else{
            reject("ERROR : SOMETHING WENT WRONG")
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"))

const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"soabee", password:"123"})
        }
        else{
            reject("Error: something went wrong")
        }
    },1000)
});
async function  consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//         const data=await response.json()       //it takes time so we must await resoponse.json()
//         console.log(data);
//     }catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

//above work can be done by the given below 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
