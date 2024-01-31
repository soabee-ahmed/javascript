class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username : ${this.username}`)
    }
    static createId(){       //we declare a method static so that an object instantiated with a class can't access them after declaring it as static we don't able to access this method
        return `123`
    }
}
const soabee=new User("soabee")
console.log(soabee.createId());
 