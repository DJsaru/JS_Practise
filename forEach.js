const file = [
    {
        "name" : "audio",
        "type": "mp3",
    },
    {
        "name" : "video",
        "type": "mp4",
    },
    {
        "name" : "ppt",
        "type": "pdf",
    }
]

file.forEach( (item) => {
    // console.log(item, item.type)
} )

const data = ["saru", "hello", "sir"]

data.forEach( function (val) {
    // console.log(val.replace())
})


// for each loop doesnt return any value

const val = data.forEach( (item) => {
    console.log(item)
})

console.log(val)  /// here the catch it doesnt return any value