(function name(){
    // name IIFE
    console.log(`Hello welcome`)
}) ();

// wheen we use two IIFE they will be separted by `;`

( (name) => {
    // para IIFE
    console.log(`Byee bye ${name}`)
}) ('saru')