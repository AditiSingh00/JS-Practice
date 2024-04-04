// array

const myArr= [0,1,2,3,4,5,"Afi"]
const myArr2=new Array(1,2,3)
// console.log(myArr2[1]);

// ************Array methods***********************************

// myArr.push(9)
// myArr.pop()
// myArr.unshift(8)
// myArr.shift()

// let newArr =myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(2));
// console.log(myArr.indexOf(9));


//***********Slice,  Splice******************** */

console.log("A",myArr);
const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3) 
console.log("C",myArr);
console.log(myn2);