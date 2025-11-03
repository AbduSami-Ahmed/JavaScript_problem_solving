/*Q1: Write a function that takes an array and returns a new array with all elements in
reverse order.
Testcase: [1, 2, 3, 4] → [4, 3, 2, 1] */

// function reverse(arr){
//     let newArr = []
//     for(let i = arr.length-1; i >= 0; i--){
//         newArr.push(arr[i]);
//     }
//     console.log(newArr)
// }

// reverse([1, 2, 3, 4])





/*Q1: Write a function that returns the largest number in an array.
Testcase 1: [1, 5, 3, 9] → 9 */

// //Solution 1
// function largest(arr){
//     let newArr
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i] > arr[j]){
//                 newArr = arr[i]
//             }
//             else{
//                 newArr = arr[j];
//             } 
//         }
//     }
//     console.log(newArr)
// }

// largest([1, 5, 3, 9])


// //Solution 2(optimal)
// function largest(arr){
//     let large = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > large){
//             large = arr[i]
//         }
//     }
//     console.log(large)
// }

// largest([1, 5, 3, 9])





/*Q3: Find the total sum of all elements in the given array.
Testcase 1: [1, 2, 3, 4] → 10 */

// function sum(arr){
//     let add = 0
//     for (let i = 0; i < arr.length; i++) {
//         add += arr[i];
//     }
//     console.log(add)
// }

// sum([1, 2, 3, 4])





/*Q4: Determine if a specific element exists in the given array.
Testcase 1: ([1, 2, 3], 2) → true */

// function find(arr, a){
//     for (let i = 0; i < arr.length; i++) {
//         if (a == arr[i]){
//             return true
//         }
//         else return false
//     }
// }

// console.log(find([1, 2, 3], 2))





/*Q5: Count how many times a specific element appears in the array.
Testcase 1: ([1, 1, 2, 3, 1], 1) → 3 */

// function appears(arr, a){
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(a == arr[i]){
//             count++
//         }
//     }
//     console.log(count)
// }

// appears([1, 1, 2, 3, 1], 1)





/*Q6: Return only the even numbers from the given array.
Testcase 1: [1, 2, 3, 4] → [2, 4] */

// function even(arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 == 0){
//             newArr.push(arr[i]);
//         }
//     }
//     console.log(newArr)
// }

// even([1, 2, 3, 4])





/*Q7: Combine two arrays into one.
Testcase 1: ([1, 2], [3, 4]) → [1, 2, 3, 4] */

// function merge(arr, arr1){
//     let newArr = arr.concat(arr1)
//     console.log(newArr)
// }

// merge([1, 2], [3, 4])






/*Q8: Remove all duplicate elements from an array and return a new array.
Testcase 1: [1, 1, 2, 3, 3] → [1, 2, 3] */

// function duplicate(arr){
//     let num = arr[0]
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] != arr[i+1]){
//             newArr.push(arr[i]);
//         }
//     }
//     console.log(newArr)
// }

// duplicate([1, 1, 2, 3, 3])





/*Q9: Return the index of a given element in the array. If it doesn’t exist, return -1.
Testcase 1: ([1, 2, 3], 2) → 1 */

// function search(arr, a){
//     let index = -1
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == a){
//             index = i
//         }
//     }
//     console.log(index)
// }

// search([1, 2, 3], 3)





/*Q10: Find the second highest number in the array.
Testcase 1: [1, 5, 3, 9, 7] → 7 */

// function seclargest(arr){
//     let large = arr[0]
//     let seclarge = 0

//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i] > large){
//         seclarge = large
//         large = arr[i]
//        }
//        else if (arr[i]<large && arr[i]>seclarge) {
//         seclarge = arr[i]
//        }
//     }
//     console.log(seclarge)
// }

// seclargest([1, 5, 3, 9, 7])





/*Q11: Return a new array with each element squared.
Testcase 1: [1, 2, 3] → [1, 4, 9] */

// function square(arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i]**2)
//     }
//     console.log(newArr)
// }

// square([1, 2, 3, 4, 5])





/* Q12: Determine if the array is sorted in ascending order.
Testcase 1: [1, 2, 3, 4] → true */

// function sort(arr){
//     let istrue = true
//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i] > arr[i+1]){
//             istrue = false
//         }
//     }
//     console.log(istrue)
// }

// sort([1, 2, 3, 4])





/* Q13: Rotate the elements of an array to the right by one position.
Testcase 1: [1, 2, 3, 4] → [4, 1, 2, 3] */

// function rotate(arr){
//     let newArr = []
//     let last = arr[arr.length-1]
//     newArr.push(last)

//     for (let i = 0; i < arr.length-1; i++) {
//         newArr.push(arr[i])
//     }
//     console.log(newArr)
// }

// rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])





/* Q14: Find and return the common elements between two arrays.
Testcase 1: ([1, 2, 3], [2, 3, 4]) → [2, 3] */

// function common(arr, arr1){
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr1.length; j++) {
//             if(arr[i] == arr1[j]){
//                 newArr.push(arr[i])
//             }
//         }
//     }
//     console.log(newArr)
// }

// common([1, 2, 3], [2, 3, 4])





/* Q15: Remove an element from the array at a given index.
Testcase 1: ([1, 2, 3, 4], 2) → [1, 2, 4] */

// function remove(arr, a){
//     let newArr = []

//     arr.splice(arr[a-1], 1)
//     console.log(arr)
// }

// remove([1, 2, 3, 4], 2)