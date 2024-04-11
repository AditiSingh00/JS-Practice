// { } = scopes (function,if/else)

// var c =300 //global scopes
let a =300

if(true){    //block scopes
    let a=10
    // console.log("inner: ",a);
    const b=20
    // var c= 30 // avoid var
}
// console.log(a);
// console.log(b);
// console.log(c);


//******************nested scopes********/

function one (){
    const username = "adi"

    function two (){
        const website = "yt"
        console.log(username);
    }

    // console.log(website);

    two( )

}

one( )

