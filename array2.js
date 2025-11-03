/*Q1: Given an array of consecutive integers with one number missing, find the missing
number.
Testcase 1: [1, 2, 4, 5] → 3 */

// function missing(arr){
//     for (let i = 0; i < arr.length-1; i++) {
//         let miss = arr[i] + 1

//         if (arr[i+1] != miss) {
//             console.log(miss)
//         }
//     }
// }

// missing([1, 2, 4, 5])






/*Q2: Find if there exists a pair of numbers in the array whose sum equals the given target.
Testcase 1: ([1, 2, 4, 7], 6) → true */

// function sumequal(arr, a){
//     let istrue = false
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]+arr[i+1] == a) {
//             istrue = true
//         }
//     }
//     console.log(istrue)
// }

// sumequal([1, 2, 4, 7], 2)





/*Q3: Move all zeros in the array to the end while maintaining the order of other elements.
Testcase 1: [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0] */

function move(arr){
    for (let i = 0; i < arr.length; i++) {
        let nonZero = arr.filter(arr[i] => arr[i] !== 0)
    }
}

move([0, 1, 0, 3, 12])