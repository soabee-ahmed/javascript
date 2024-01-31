function SetUserName(username){
    this.username=username;
    console.log("called");
}

function createUser(username,email,password){
    SetUserName.call(this,username)    //if we do not apply call function here so we do not able to initialize username if we write only setUsername(username) than its nested (setUsername) variable scope is gone so for passing its this context to setUsername we use call function
    this.email=email
    this.password=password
}
const chai=new createUser("chai","chai@gmail.com","123")
console.log(chai)

