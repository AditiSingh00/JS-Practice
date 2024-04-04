//Singleton
//Object.create >>> //constructor method


//************object literals**********///

const mySym =Symbol("key1")

const newUser={
    name:"Adi",
    "Full Name":"Adiii",
    [mySym]:"mykey1", //symbol
    age: 23,
    location:"ranchi",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"],
}
// console.log(newUser.age);
// console.log(typeof newUser[mySym]);
// console.log(newUser[mySym]);
// console.log(newUser["Full Name"]);
// console.log(newUser["age"]);

newUser.age = 24;
// console.log(newUser);
// Object.freeze(newUser);
newUser.age =22;
// console.log(newUser);

newUser.greeting= function(){
    console.log("hncm");
}
newUser.greeting1= function(){
    console.log(`heelloo , ${this.name}`);
}
// console.log(newUser.greeting);
// console.log(newUser.greeting());
// console.log(newUser.greeting1());


//**************************More Object************//

// const tinderUser =new Object() // singleton object
const tinderUser={}  //Non-Sigleton Object
tinderUser.id="abc1";
tinderUser.name="adi";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);

const reularUser ={
    mail:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"adiii",
            lastname:"singh",
        }
    }
}
// console.log(reularUser.fullname.userfullname.firstname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    1:"a",
    2:"b"
}
// const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2)
// const obj4=Object.assign({},obj1,obj2)  // {} = optional parameters
const obj3={...obj1,...obj2}
// console.log(obj3);
// console.log(obj4);

const users=[
    {
        id:1,
        name:"adi",
    },
    {
        id:2,
        name:"adiccc",
    },
    {
        id:3,
        name:"addddi",
    }
]
users[1].name
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

