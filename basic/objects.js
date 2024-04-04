//Singleton
//Object.create >>> //constructor method

//************object literals**********8

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
console.log(newUser.greeting);
console.log(newUser.greeting());
console.log(newUser.greeting1());


