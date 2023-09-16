const data = [
    {
        "name" : "sarang",
        "like" : 25
    },
    {
        "name" : "harsh",
        "like" : 25
    },
    {
        "name" : "vishwa",
        "like" : 25
    },
    {
        "name" : "rohit",
        "like" : 25
    }
]

const fetch = data.filter( (get) => {
    return get.name;
})

const fetch2 = data.filter( (val) => {
    return val.like > 20
})

const fetch3 = data.filter ( (name) => {
    return name.name === "sarang" || name.like > 20
})

console.log(fetch)
console.log(fetch2)
console.log(fetch3)







const Num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

const get = Num.filter((val) => {
    return val <= 5
})

Num.forEach( (item) => {
   if(item > 4){
        // console.log(item)
   }else {
    // console.log(` value is ${item}`)
   }
} )

// console.log(get)