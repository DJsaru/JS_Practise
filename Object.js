const user = {
    name : "saru",
    sub : "React",
    year : 2,
    practise : true,
    Full_Name : {
        Fname : "sarang",
        Lname : "dj"
    }
}

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


const dj = {...user}
console.log(dj)
user.name = "HELLO"
// user.Full_Name.Fname = "BYE"

user.name = function(){
    // console.log("heelll")
}

// console.log(user.Full_Name.Fname)
// console.log(user.name, user.sub)

// console.log(user.name())