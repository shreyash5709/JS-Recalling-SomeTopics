// ES6

// class User{
//     constructor (username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }

//     upperCase(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const cahi = new User("cahi", "chai@gmail.com", "123");

// console.log(cahi.encryptPassword());
// console.log(cahi.upperCase());

// behinde the seen 

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.upperCase = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());
console.log(tea.upperCase());