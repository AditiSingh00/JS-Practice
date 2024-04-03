// Primitive DataTypes
// 7 types : String, Numbers, Boolean, Null, Undefined, Symbol, BigInt
const score = 100;
const scoreValue =100.2;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id =Symbol('123');
const anotherId=Symbol('123');
// console.log(id===anotherId);
const bigNumber= 45320141n; //BigInt

// Reference (Non-Primitive)
// Array, Objects, Functions

const nam =['adi','raj','rahul']
let myObj={
    name:"adi",
    age: 23,
}
const myFunction=function(){
    console.log("hello");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof nam);
// null = object,