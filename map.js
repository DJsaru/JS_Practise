const data = [
    {
        "name" : "sarang",
        "like" : 35
    },
    {
        "name" : "harsh",
        "like" : 25
    },
    {
        "name" : "vishwa",
        "like" : 21
    },
    {
        "name" : "rohit",
        "like" : 23
    }
]

// const val = data.map( (ind) => ind.like * 10) 
 
// const val2 = data.map().map().filter()

const val3 = data
                // .map( (val) => val.name === "sarang")
                .map( (val) => val.like)
                .filter( (val) => {
                    return val.like > 10 
                })
console.log(val3);