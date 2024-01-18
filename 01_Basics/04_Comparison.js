// Comparison 

// console.log( 2 > 1) //true
// console.log( 2 < 1) // false
// console.log(2 >= 1)  //true
// console.log( 2 == 1)  //  false
// console.log(2 != 1) // true

// console.log("2" > 1)  // true           /* Some times in these types of operation we 
// console.log("02" > 1)   // true             not get the Predicted output */
                   
// In Type Script You are not Allowed to Compare two different datatypes

// console.log(null > 0)   //false 
// console.log(null < 0)   //false 
// console.log(null == 0)  //false 
// console.log(null >= 0)  //true

// The reason is that an equality check == and Comparison <,>,<=,>=,= works different
// Comparison Converts to a Number and treat as a 0

// console.log(undefined == 0)   // false
// console.log(undefined <= 0)      // false
// console.log(undefined >= 0)      // false
// console.log(undefined < 0)       // false
// console.log(undefined > 0)       // false



// ===  ------> Checks the Datatype and value also

console.log("2" === 2)

