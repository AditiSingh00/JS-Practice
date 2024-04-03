const name = "Adi";
const repoCount = 5
// console.log(name + repoCount +" Value"); //Outdated

console.log(`name is ${name} my repo count ${repoCount}`);//String Interpolation

const myName = new String ('adi1-cc');

console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('i'));
const newString=myName.substring(0,3)
console.log(newString);

const anoString= myName.slice(-8,2) //****/
console.log(anoString);

const newString1 = "    adi ";
console.log(newString1);
console.log(newString1.trim());

const url ="https://google.com/ghj%20hh"
console.log( url.replace("%20","-"));
console.log(url.includes("google"));
console.log(myName.split("-"));
