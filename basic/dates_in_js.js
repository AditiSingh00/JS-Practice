//dates

// let myDate =new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// let myNewdate=new Date(2023, 0, 12)
// let myNewdate=new Date(2023, 0, 12, 5, 3)
// let myNewdate=new Date("2023-01-14")
// console.log(myNewdate.toDateString());
// console.log(myNewdate.toLocaleString());
// let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myNewdate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDatee= new Date();
// console.log(newDatee);
// console.log(newDatee.getMonth()+1); //month start with 0..
// console.log(newDatee.getDay());
newDatee.toLocaleString('default',{
    weekday:"long",
});
console.log(newDatee);
