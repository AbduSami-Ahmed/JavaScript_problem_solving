/* Q1: Return all strings whose length is strictly greater than N

TestCases: ["hi", "hello", "js", "world"] N=2 */

// function Length(arr, N){

//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         newArr = arr[i].split("")
//         if (newArr.length > N) {
//             console.log(newArr.join(""))
//         }
//     }
// }

// Length(["hi", "hello", "js", "world"], 2)





/* Q2: Return the product of all the integers in the array, if the aray is empty then return 1

TestCases: [2,3,4] --> 24 */

// function arrProduct(arr){

//     let res = 1

//     for (let i = 0; i < arr.length; i++) {
//         res*= arr[i]
//     }
//     console.log(res)
// }

// arrProduct([2,3,4])





/* Q3: Count how many numbers are odd

TestCases: [1,2,3,4,5] --> 3 */

// function oddCount(arr){

//     let count = 0

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 == 1){
//             count++
//         }
//     }
//     console.log(count)
// }

// oddCount([1,2,3,4,5])





/* Q4: Return the first index where the target appears, if not found, return -1

TestCases: [4,2,7,2] target=2 */

// function target(arr, a){

//     let res

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == a) {
//             res = i
//             break
//         }
//         else{
//             res = -1
//         }
//     }
//     console.log(res)
// }

// target([4,2,7,2], 2)





/* Q5: Return an array with all occurences of X removed

TestCases: [1,2,3,2,4] X=2 --> [1,3,4] */

// function remove(arr, x){

//     let newArr = []
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== x) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }

// remove([1,2,3,2,4], 2)





