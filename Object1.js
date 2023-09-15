const data = {
    course : "React",
    price : "99",
    user : true
}

// object deconstructing 
const {user : stud, price} = data;
console.log(stud, price)