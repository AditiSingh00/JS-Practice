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
console.log(loginUser("hii"));
// console.log(loginUser());  undefined