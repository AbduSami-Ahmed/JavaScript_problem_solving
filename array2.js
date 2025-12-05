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

function repeat(arr, arr1){
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if(arr[i] == arr1[j] && !newArr.includes(arr[i])){
                newArr.push(arr1[j])
            }
        }
    }
    console.log(newArr)
}

repeat([1, 2, 2, 3], [2, 3, 4])





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




//******************************************************************************************************************************************* */
/*Q7: Split the array into groups of given size.
Testcase 1: ([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]] */

// function group(arr, a){
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
        
//     }
// }





/*Q8: Rotate the array to the right by k positions.
Testcase 1: ([1, 2, 3, 4, 5], 2) → [4, 5, 1, 2, 3] */

function rotate(arr, a){
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[(i - a + arr.length) % arr.length])
    }
    console.log(newArr)
}

rotate([1, 2, 3, 4, 5], 5)





/*Q9: Find the element that appears more than n/2 times in the array.
Testcase 1: [3, 3, 4, 2, 3, 3, 5] → 3 */

// function appear(arr){

//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 count++
//             }
//         }
//         if(count > (arr.length/2)){
//             console.log(arr[i])
//             return
//         }
//     }
//     console.log("null")
// }

// appear([3, 3, 3, 4, 3, 2, 5]);





/*Q10: Return the kth largest element in the array.
Testcase 1: ([3, 2, 1, 5, 6, 4], 2) → 5 */

// function kLargest(arr, p){
//     let newArr = []
//     arr.sort((a,b) => b - a)
//     console.log(arr)

//     newArr = arr[0 + (p-1)]
//     console.log(newArr)
// }

// kLargest([10, 20, 30, 40], 2)





/*Q11: Rearrange the array such that positive and negative numbers appear alternately.
Testcase 1: [1, -2, 3, -4, 5] → [1, -2, 3, -4, 5]
Testcase 2: [-1, -2, -3, 4, 5, 6] → [4, -1, 5, -2, 6, -3] */

// function posNeg(arr){
//     let newArr = [];
//     let pos = []
//     let neg = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             pos.push(arr[i])
//         }
//         else{
//             neg.push(arr[i])
//         }
//     }
//     console.log(pos)
//     console.log(neg)

//     let len = Math.min(pos.length, neg.length)
//     for (let j = 0; j < len; j++) {
//         newArr.push(pos[j], neg[j])
//     }
//     console.log(newArr)
// }

// posNeg([-1, -2, -3, 4, 5, 6])





/*Q12: Find the continuous subarray whose elements sum up to a target value.
Testcase 1: ([1, 2, 3, 7, 5], 12) → [2, 3, 7] */

// function sumArray(arr, target){

//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         let newArr = [];

//         for (let j = i; j < arr.length; j++) {
//             sum += arr[j]
//             newArr.push(arr[j])

//             if (sum == target) {
//                 console.log(newArr)
//                 return;
//             }
//         }
//     }
// }

// sumArray([1, 2, 3, 7, 5], 12)





/*Q13: Find all unique triplets in the array that sum up to zero.
Testcase 1: [-1, 0, 1, 2, -1, -4] → [[-1, -1, 2], [-1, 0, 1]] */

// function tripZero(arr){
    
//     for (let i = 0; i < arr.length; i++) {
//         let newArr = []
//         let sum = 0

//         for (let j = i; j < arr.length; j++) {
//             sum = sum + arr[j];
//             newArr.push(arr[j])

//             if (sum == 0) {
//                 console.log(newArr)
//             }
//         }
//     }
// }

// tripZero([-1, 0, 1, 2, -1, -4])




//******************************************************************************************************************************************* */
/*Q14: Return all elements of a 2D array in spiral order.
Testcase 1: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] → [1, 2, 3, 6, 9, 8, 7, 4, 5] */

// function array2d(arr, arr1, arr2){
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
        
//     }
// }




//******************************************************************************************************************************************* */
/*Q15: Return an array where each element is the product of all elements except itself.
Testcase 1: [1, 2, 3, 4] → [24, 12, 8, 6] */

// function product(arr){
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {

//     }
// }