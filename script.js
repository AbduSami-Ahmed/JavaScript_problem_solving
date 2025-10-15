/*Q1: Write a function deepFilterFalsy(arr) that takes a nested array of any depth and returns a
flattened array with all falsy values removed. */

// function deepfilterfalsy(arr){

// let a = 99

//     for(let i = 0; i < arr.length ; i++){
//         if(!arr[i] ){
//             arr[i] = a; 
//        }
       
//     }
//     console.log(arr);
// }
// deepfilterfalsy([0, 1, "",false, "JS"])



/*Q2: Given an object, write a function firstTruthy(obj) that returns the first truthy property value
using short-circuit evaluation.
Testcases: firstTruthy({x: false, y: 0, z: "Test"}) // Output: "Test" */

// function firstTruthy(obj){
//     for (const i in obj) {
//         if (obj[i]) {
//             console.log(obj[i]);
//         }
        
//     }
// }
// firstTruthy({x: false, y: 0, z: "Test"});



/*Q3: Write a function complexCheck(a, b, c) that returns true if (a && b) || (!c && b) evaluates to
true. Test all 8 boolean combinations.  test case: complexCheck(true, true, true) // Output: true*/

// function complexCheck(a,b,c){
//     return (a && b) || (!c && b);
// }

// let testcases = [
//     [false, false, false],
//     [false, false, true],
//     [false, true, false],
//     [false, true, true],
//     [true, false, false],
//     [true, false, true],
//     [true, true, false],
//     [true, true, true]
// ]

// testcases.forEach(([a,b,c])=>{
//     console.log(`complexCheck(${a}, ${b}, ${c}) = ${complexCheck(a,b,c)}`);
// })



/*Q4: Create a function countTruthy(arr) that counts all truthy values in an array, including nested
arrays of arbitrary depth.
Testcases: countTruthy([0, [1, "", [false, "JS"]]]) // Output: 2 */

// function countTruthy(arr){

//     let count = 0;
//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i]){
//             count++;
//         }
//     }
//     console.log(count)
// }
// countTruthy([1, "", false, "JS"])



/*Q5: Given an array of numbers and a boolean mask of the same length, write a function
applyMask(arr, mask) that returns only elements corresponding to true in the mask.
Testcases: applyMask([10, 20, 30], [false, true, true]) // Output: [20, 30] */

// function applyMask(arr, mask){
//     for(let i = 0; i < mask.length; i++){
//         if(mask[i]){
//             console.log(arr[i])
//          }
//     }
// }

// applyMask([10,20,30], [false, true, true])



/*Q6: Write a function replaceFalsy(arr, replacement) that replaces all falsy values in an array
with a custom replacement value.
Testcases: replaceFalsy([0, "JS", "", null], 999) // Output: [999, "JS", 999, 999] */

// function replaceFalsy(arr, replacement){
//     for(let i = 0; i < arr.length ; i++){
//         if(!arr[i] ){
//             arr[i] = replacement; 
//        }
//     }
//         console.log(arr);
// }

// replaceFalsy([0, "JS", "", null], 999);



/*Q7: Create a function evaluateLogical(arr) that takes an array of booleans and operators like
[true, "&&", false, "||", true] and returns the boolean result without using eval().
Testcases: evaluateLogical([true, "&&", false, "||", true]) // Output: true */

function evaluateLogical(arr){
    let res = arr[0];
    for (let i = 1; i < arr.length; i+=2) {
        let op = arr[i];
        let b = arr[i+1];
        res = booleanOp(res,b,op)
    }
    return res;
}

function booleanOp(a,b,op){
    switch(op){
        case "||":
            return a||b;
        case "&&":
            return a&&b;
    }
}

console.log(evaluateLogical([true, "&&", false, "||", true]));




// function evaluateLogical(arr){
//     let res = arr[0];
//     for(let i=1; i<arr.length-1;i+=2){
//         let op = arr[i];
//         let b = arr[i+1];
//         res = doBooleanOperation(res,b,op);
//     }
//     return res;
// }
// function doBooleanOperation(a,b,op){
//     switch (op) {
//         case "||":
//             return a||b;
//         case "&&":
//             return a&&b;
//     }
// }
// console.log( evaluateLogical([true, "||", false, "&&", true]));





/*Q8: Write a function areEquivalent(val1, val2) that returns true if two values are equivalent after
boolean conversion, false otherwise.
Testcases: areEquivalent(1, "JS") // Output: true */

// function areEquivalent(val1, val2) {
//     if (val1 == true && val2 == true) {
//         // Base case to stop recursion
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(areEquivalent(1, "JS"));



/*Q9: Write a function executeIfTruthy(value, fn) that executes the function fn only if value is
truthy, otherwise returns "Skipped".
Testcases: executeIfTruthy(0, () => "Run") // Output: "Skipped" */

// function executeIfTruthy(value, fn){
//     if (value == true) {
//         return fn();
//     }
//     else{
//         return "skipped";
//     }
// }

// console.log(executeIfTruthy(1, ()=> "Run"));



/*Q10: Create a function getValue(input, defaultValue) that returns input if truthy, otherwise
returns defaultValue. Handle inputs like 0, "", false, null, undefined, or objects.
Testcases:getValue(0, 100) // Output: 100 */

// function getValue(input, defaultValue){
//     if(input == true){
//         return input;
//     }
//     else{
//         return defaultValue;
//     }
// }

// console.log(getValue(0,100));