const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("In setTimeout");
    resolve(); // connect with the { .then } method
  }, 1000);
});

promise.then(function () {
  console.log("Promise consume");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("IN timeout 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("done 2 ");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      name: "sarang",
      div: 1,
    });
  });
});

promiseThree.then((data) => {
  console.log(data);
});

const promisefour = new Promise(function (resolve, reject) {
  resolve({
    name: "DJ",
    lname: "jaybhaye",
  });
});

promisefour.then(function (data) {
  console.log("Data from then ", data.name);
});

const promisefive = new Promise(function (resolve, reject) {
    let err = false;
    if(!err){
        resolve({
            name: "saru",
          });
    }else{
        reject('Error occur')
    }
});
promisefive
  .then(function (data) {
    console.log(data);
    return data;
  })
  .then(function (username) {
    console.log(username);
  }).catch(function(err){
    console.log(err)
  }).finally(function(){
    console.log('This is finally block');
  })








//   promises are return values after successfull result 
//   { handling asynchronous operations  }

//   try and catch uses for synchronous operations 
//   they dont wait for external operations 