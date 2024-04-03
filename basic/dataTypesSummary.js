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

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
// console.log(typeof nam);

// null = object,

//********************************************/
//Stack (Primitive), Heap(Non-Primitive)

let myYt = "codewith..";
let insta =myYt ;
insta ="artt";
console.log(myYt);
console.log(insta);

let user1 = {
    mail: "abc@gmail.com",
    id: "user1",
}
let user2=user1;

user2.mail="ann@gmail.com";
console.log(user1.mail);
console.log(user2.mail);