const data = [
    {
        price : 2000,
    },
    {
        price :3400,
    },
    {
        price : 1000,
    },
    {
        price : 2054,
    }
]

const val = data.reduce( (acc, item) => {
    console.log(`price is : ${acc} and `)
    return acc + item.price
}, 0)

console.log(val)

