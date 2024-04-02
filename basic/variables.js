const accountId=144553;
let accountEmail="aditi@gmail.com";
var accountpassword="5612"; // don't use var bcz of issue in block scope and functional scope
accountCity="Jaipur";
let accountState;

// accountId=2; not allowed

accountEmail="a@gmail.com";
accountpassword="7899";
accountCity="goa";

console.log(accountId);
console.table([accountId,accountEmail,accountpassword,accountCity,accountState])