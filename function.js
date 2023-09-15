// function Login(num1 = 6 , num2 = 5) {
//     let res = num1 + num2
//    console.log("result " , res);
//    return res 
// }

// console.log(Login(3, 9));

function user(username = "DJ"){
    console.log(`${username} is logged in`)
    return `${username} is looged `
}

// console.log(user("saru"));


function calculateCartRate(v1, v2, ...num1){
    return num1
}

console.log(calculateCartRate(4, 68, 98, 900))

const user1 = {
    name : "saru",
    div : 1
}

function max(anyval){
    return `${anyval.name} and its div is ${anyval.div}`
}

console.log(max({
    name : "heii"
}))

const data = [100, 200, 500]

function getData(val){
    return val[2]
}

console.log(getData(data))