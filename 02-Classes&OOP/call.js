function SetUsername(username){
    // complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username); 

    /* .call method is used to pass current execution context(EC) to another funtion with their this reference for holding all declaration of another function because after calling EC is removed from the call stack with their all declarations */
    
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "`1234");
console.log(chai);