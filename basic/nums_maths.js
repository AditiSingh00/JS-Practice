const balance =new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const newNumber = 123.896;
// console.log(newNumber.toPrecision(3));

const tenth =10000000;
// console.log(tenth.toLocaleString());
// console.log(tenth.toLocaleString('en-IN'));


//++++++++++Maths++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));   //absolute value...
// console.log(Math.round(4.5));   //round off value
// console.log(Math.ceil(4.4));    //top value
// console.log(Math.floor(4.8));   //lowest value
// console.log(Math.min(4,3,5,1));   //min/lowest value
// console.log(Math.max(1,6,4,1,2));   //max value
// console.log(Math.random());  //Gives random value between 0 & 1 in decimals.
// console.log(Math.random()*10);  
// console.log(Math.random()*10+1); // This assures that values are atleast 1 & more than 1. 
// console.log((Math.random()*10)+1);  //To avoid any BODMAS rule miscalculation.
// console.log(Math.floor(Math.random()*10)+1);  

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()* (max - min + 1))+ min);
console.log(Math.floor(0.99999 * (max-min + 1) + min));
console.log(Math.floor(0.00000 * (max-min + 1) + min));