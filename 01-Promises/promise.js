// Two part method
const promiseOne = new Promise(function(resolve, reject){
    // Do an asynk task
    // DB calls, Cryptography, Network
    setTimeout(() => {
        console.log("Asynk task compeleted");
        resolve();
    },1000);
});

promiseOne.then(() => {
    console.log("Promise consumed");
});

// One part method
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task2");
        resolve();
    },1000);
}).then(() => {
    console.log("Async2 resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "chai",
            email: "chai@example",
        });
    }, 1000);
});

promiseThree.then((user) =>{
    console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Shreyash", email: "shreyash@gmail.com"});
        }else{
            reject("ERROR: something went wrong!");
        }
    },1000);
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
});

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "amit", password: "123"});
        }else{
            reject("ERROR: JS went wrong!");
        }
    },1000);
});

async function conssumePromiseFive() {
    try{
        let response = await promiseFive;
        console.log(response);
    }catch(err){
        console.log(err);
    }
}

conssumePromiseFive();

// async function allUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);  
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// allUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch(err => console.log(err));