// function sayMyName(){
//     console.log("hii");
// }

// sayMyName  >>>this is reference
// sayMyName( )     //this is execution

function addTwoNumbers(num1,num2){  // (num1,num2) >>parameters>>>function ki definition
    // let result = num1+num2
    // return result
    return num1+num2
}
// addTwoNumbers(3,5) //arguements >>function ko call krna
const result = addTwoNumbers(3,5) //arguements
// console.log(result);  //undefined

// function loginUser(user1){
function loginUser(user1 ="Adii"){
    // if(user1 === undefined){
        if(!user1){
       console.log("please enter a username");
       return
    }
    return`${user1} just log in`
}
// console.log(loginUser("hii"));
// console.log(loginUser());  undefined

function calculateCartPrice (val1, val2, ...numm1){  // ...  >rest operator,spread operator
    return numm1
}
// console.log(calculateCartPrice(200, 300, 400));

const uuser ={
    username: "hii",
    price: 200,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(uuser)
handleObject({
    username: "adi",
    price: 350,
})

const myNewArr=[200, 300, 400]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([250, 350, 450]));