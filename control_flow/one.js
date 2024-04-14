// IF

// if (true) {   
// }

const temp = 42
// if (temp <50) {
//     console.log('less than 50');
// }
// console.log('temp is greater than 50');


// IF ELSE


// if (temp === 42) {
//     console.log('less than 50');
// }else{
// console.log('temp is greater than 50');
// }

//  < (less than), >, <=, >=, ==, !=(is not equal/not equal), ===(check its datatype)

// const score = 200 

// if (score > 100) {
//     const power = " fly"
//     console.log(`power:${power}`);
// }

// const bal = 1000

// if (bal > 500) console.log("test"); //implicit scope (; is important)
// if (bal > 500) console.log("test"), console.log("test2")   //not use


//NESTING


// if (bal < 500) {
//     console.log("less than 500");
// } else if (bal < 750 ){
//     console.log("less than 750");
// }else if(bal <900){
//     console.log("less than 750");
// } else{
//     console.log("less than 1200");
// }


// CoNTROL Statement

const userLoggedIn = true
const dbCard =true
const loggedInFromGoogle = false
const loggedInFromEmail =true

if (userLoggedIn && dbCard && 2==3) { //  && = AND
    console.log("allow to buy");
}

if (loggedInFromGoogle || loggedInFromEmail) {   // || =OR
    console.log("user looged in");
}
// &&, || logical operator



// Nullish Coalescing Operator (??): null, undefined


let val1;
// val1 = 5 ?? 10
// val1= null ?? 10
// val1 = undefined ?? 15 
// val1 = null ?? 10 ?? 15


console.log(val1);


// Terniary Operator


// condition ? true : false

const price = 100
price <= 80 ? console.log("less than 80 "): console.log("more tha 80");


