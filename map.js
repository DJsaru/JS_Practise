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

const Num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

const get = Num.filter((val) => {
    return val <= 5
})

console.log(get)