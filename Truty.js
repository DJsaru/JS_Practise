// FALSY VAL
        // 0, -0, BigInt, "", NaN, undefined, null

// Truthy val
        // " ", "0", "false", [], {}, function(){}


        // ===================== \\


// NULLISH Coalscing Operator

let val ;
// val = 10 ?? 20;
// val = null ?? 10;  //10
// val = undefined ?? 20;  //20
// val = undefined ?? 10 ?? 30;  //10

// console.log(val)

// ========================= //

// Ternary operator

// condition ? true : false;

const rate = 100;
rate <= 90 ? console.log("less") : console.log("greater")