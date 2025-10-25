// let myName = "Shreyash    ";
// let course = "BTech   ";

// console.log(myName.truelength);


let myHero = ["thor", "ironman"];

let heroPower = {
    thor: "hammer",
    ironman: "ironsuit",

    getIronPower: function(){
        console.log(`Ironman power is ${this.ironman}`);
    }
}

Object.prototype.shreyash = function(){
    console.log("Shreyash is present in all objects");
}

Array.prototype.heyShreyash = function(){
    console.log("Shreyash says hello");
}

// heroPower.shreyash();
// myHero.shreyash();
// myHero.heyShreyash();
// heroPower.heyShreyash();

// Prototypical Inheritance

const user = {
    name: "cahi",
    email: "chai@gmail.com",
}

const Teacher = {
    makevideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: `JS Assingment`,
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "chaiaurcode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Shreyash    ".trueLength();
"tea".trueLength();