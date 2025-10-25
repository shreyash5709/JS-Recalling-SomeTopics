const user = {
    username: "shreyash",
    loginCount: 8,
    isLogedIn: true,

    getUserDetails: function(){
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLogedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogedIn = isLogedIn;

    return this;
}

const userOne = new User("amit", 4, true);
const userTwo = new User("cahiaurcode", 11, false);
console.log(userOne);
console.log(userTwo);
