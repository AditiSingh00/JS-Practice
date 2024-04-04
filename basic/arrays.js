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

// console.log("A",myArr);
const myn1=myArr.slice(1,3)
//In 'slice()', the first argument sets the start index, and the second sets the end index for slicing. 
// console.log(myn1);
// console.log("B",myArr);

const myn2=myArr.splice(1,3) 
//In 'splice()', the first argument is the start index for removing/adding elements, and the second specifies the number of elements to remove. 
// console.log("C",myArr);
// console.log(myn2);


//***********EXTRA***************************************** *//

const heros1 = ["shadow", "thor", "odin"]
const heros2 = ["batman", "flash", "superman"]

// heros1.push(heros2)
// console.log(heros1);
// console.log(heros1[3][1]); //third element

// const heros3=heros1.concat(heros2)
// console.log(heros3);

const heros4 =[...heros1,...heros2] //spread operators
// console.log(heros4);

const another_array= [1,2,3,[,4,5,6],7,[6,7,[4,5]]]
const another_array2 =another_array.flat(Infinity)
// console.log(another_array2);

console.log(Array.isArray('Adi')); 
console.log(Array.from('Adi')); 
console.log(Array.from({name:"adi"}));  //gives empty array

let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3));