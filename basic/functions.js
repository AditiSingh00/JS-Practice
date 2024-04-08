// function sayMyName(){
//     console.log("hii");
// }

// sayMyName  >>>this is reference
// sayMyName( )     //this is execution

function addTwoNumbers(num1,num2){  // (num1,num2) >>parameters
    // let result = num1+num2
    // return result
    return num1+num2
}
// addTwoNumbers(3,5) //arguements
const result = addTwoNumbers(3,5) //arguements
// console.log(result);

function loginUser(user1){
    return`${user1} just log in`
}
console.log(loginUser("hii"));
// console.log(loginUser());  undefined

