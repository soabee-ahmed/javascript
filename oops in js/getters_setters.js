class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}hitesh`
    }
    set password(value){
        this._password=value
    }
}
//if we define getter than it is must to declare setter also
const soabee=new User("s@gmail.com","123")
console.log(soabee.password);
