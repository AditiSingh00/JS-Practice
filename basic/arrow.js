const user={
    username:"adi",
    price:99,

    welcomeMsg:function(){
        console.log(`${this.username},welcome`); // this = current context
        // console.log(this);
    }
}
// user.welcomeMsg()
// user.username="sam"
// user.welcomeMsg( )
// console.log(this);

// function chai(){
//     let username="adiiii"
//     console.log(this.username); //undefined
//     console.log(this);
// }
// chai()

// const chai= function(){
//     let username="adiiii"
//     console.log(this.username); //undefined
// }
const chai= ()=>{
    let username="adiiii"
    // console.log(this.username); //undefined
    // console.log(this);       //  empty { }
}
// chai()


//*********************arrow************************/
// ()=>{ }      basic arrow syntax



// const addTwo =(num1,num2)=>{
//         return num1+ num2         // explicit return
// }

// const addTwo =(num1,num2)=> num1+ num2
// const addTwo =(num1,num2)=> (num1+ num2)   // implicit return
const addTwo =(num1,num2)=> ({username:"adii"})   
console.log(addTwo(3,4));

// const myarr =[1,2,3,4,5]
// myarr.forEach(()=>{})