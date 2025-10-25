const descriptior = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptior); // writable is false so we can not update the value of PI
Math.PI = 5;
console.log(Math.PI);