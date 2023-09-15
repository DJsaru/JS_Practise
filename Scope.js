// let x = 100;



// var y = 200;
const z = 300;

{
  let x = 10;
  var y = 20;
  const z = 30;

}

// console.log(x)
// console.log(y)
// console.log(z)

function One (){
    let username = "saru"

    function two(){
        let website = "youtube"
        console.log(username)
    }
    console.log(website)

    two()
}

// One()

if(true){
    const user = "saru"
    if(user === "saru"){
        const play = " badminton"
        // console.log(user + play)
    }
    // console.log(play)

}

// console.log(user)

// console.log(one(5))

function one (num){
    return num + 5 
}


console.log(two())
const two = function three(num = 1){
    return num + 1
}
