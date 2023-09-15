const obj = {
    user : "saru",
    price : 99,
    duration : 5,
    welcome : function(){
        console.log(`${this.user}, welcome to web`)
        console.log(this)
    }
}

// obj.welcome()
// obj.user = "hello"
// obj.welcome()

// console.log(this)

// function hey (){
//     console.log(this);
// }
// hey()


const add = (num1, num2) => {
    return num1 + num2  //explicitily
}

const add2 = (num1, num2) => (num1 + num2) //implicit 

console.log(add2(3 , 5))