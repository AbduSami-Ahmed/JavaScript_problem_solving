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

// function move(arr){
//     let nonZero = arr.filter(num => num !== 0)
//     let zeros = arr.length - nonZero.length;

//     for (let i = 0; i < zeros; i++) {
//         nonZero.push(0);
//     }
//     console.log(nonZero)
// }

// move([0, 1, 0, 3, 12])





/*Q4: Return the intersection of two arrays without repeating elements.
Testcase 1: ([1, 2, 2, 3], [2, 3, 4]) → [2, 3] */

// function repeat(arr, arr1){
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr1.length; j++) {
//             if(arr[i] == arr1[j] && !newArr.includes(arr[i])){
//                 newArr.push(arr1[j])
//             }
//         }
//     }
//     console.log(newArr)
// }

// repeat([1, 2, 2, 3], [2, 3, 4])





//********************************************************************************************************************************************
 /*Q5: Find the length of the longest consecutive number sequence in an array.
Testcase 1: [100, 4, 200, 1, 3, 2] → 4 */

// function seqCount(arr){
//     let count = 0

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//                 if(arr[i] == arr[j]+1){
//                     count++
//             }
//         }
//     }
//     console.log(count)
// }

// seqCount([100, 4, 200, 1, 3, 2])




//******************************************************************************************************************************************* */
/*Q6: Convert a multi-dimensional array into a one-dimensional array.
Testcase 1: [1, [2, 3], [4, [5]]] → [1, 2, 3, 4, 5] */

// function convert1d(arr){
//     let newArr = [];
    
// }





/*Q7: Split the array into groups of given size.
Testcase 1: ([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]] */

function group(arr, a){
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        
    }
}