//functions have their own functionality but the can also behave like objects if we apply some object functionality on them due to their prototype behaviour
function multiplyby5(num){
    return num*5
}
multiplyby5.power=2
console.log(multiplyby5(5));        //25
console.log(multiplyby5.power);     //2
console.log(multiplyby5.prototype); //{}

function createUser(username,score){
    this.username=username;
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai=new createUser("chai",25)       //must apply new keyword here because it tells it that new property is added here but if we do not apply new keyword than it do not give output of chai.printMe()
const tea=createUser("tea",250)
chai.printMe()