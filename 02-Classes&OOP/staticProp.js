class User{
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log("Username is:",this.username);
    }

    createId(){
        return `123`
    }

    static createID(){ // static keyword es class ke bahar kisi ko bhi es method ka access ni deta hai.
        return `123`
    }
}

const chai = new User("chai");
chai.logMe();
console.log(chai.createId());
// console.log(chai.createID()); // this give an error because this is a static method.