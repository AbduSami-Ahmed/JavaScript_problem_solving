/*Q1: Return te sum of all even numbers in the array

TestCases - Input:[1,2,3,4,5] */  

// function evenSum(arr){
//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 == 0){
//             sum += arr[i]
//         }
//     }
//     console.log(sum)
// }

// evenSum([1,2,3,4,5])





/*Q2: Count how many values in the array are strictly greater than X

TestCases - Input:[3,5,7,2], X=4 */  

// function greater(arr, X){

//     let count=0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > X) {
//             count++
//         }
//     }
//     console.log(count)
// }

// greater([3,5,7,2], 4)





/*Q3: Return te max vlaue present in the array

TestCases - Input:[1,5,9,3] */  

// function greatest(arr){

//     let res

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i+1]) {
//             res = arr[i]
//             break;
//         }
//     }
//     console.log(res)
// }

// greatest([1,5,9,3])





/*Q4: Return a new array that contains the same elements but in reverse order

TestCases - Input:[1,2,3,4] */  

// function reverse(arr){
//     let newArr = []

//     for (let i = arr.length-1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }
//     console.log(newArr)
// }

// reverse([1,2,3,4])





/*Q5: Count how many times the value appears in the array

TestCases - Input:[1,2,1,1,3] target = 1 */  

// function repeat(arr, a){
//     let count = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==a) {
//             count++
//         }
//     }
//     console.log(count)
// }

// repeat([1,2,1,1,3], 1)





/*Q6: Remove all negative numbers and return the filtered array

TestCases - Input:[-2,3,-1,4,0] */  

// function filterNeg(arr){

//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }

// filterNeg([-2,3,-1,4,0])





//***********************************************************************************************************************************************
/*Q7: Return the length of the longest strictly increasing consecutive sequence in the array

TestCases - Input:[1,2,3,4] */  
// function streak(arr){
    
//     let count = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i+1] > arr[i] && arr[i] !== arr[i+1]) {
//             count++
//         }
//     }
//     console.log(count)
// }

// streak([1,2,2,3,4])





/*Q8: Move all zeroes to the end while keeping all the order of non-zero elements unchanged

TestCases - Input:[0,1,0,3,12] */

// function moveZero(arr){
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] !== 0){
//             newArr.push(arr[i])
//         } 
//     }
    
//     let zeros = arr.length - newArr.length
    
//     for (let j = 0; j < zeros; j++) {
//         newArr.push(0)
//     }
//     console.log(newArr)
// }

// moveZero([0,1,0,3,12])





/*Q9: Return the second largest number in the array

TestCases - Input:[10,20,4,20] */  

// function secLargest(arr){
//     let large = 0
//     let secLarge = 0

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > arr[i+1]){
//             large = arr[i]
//         }
//     }
//     console.log(large)

//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > secLarge && arr[j] < large) {
//             secLarge = arr[j]
//         }
//     }

//     console.log(secLarge)
// }

// secLargest([10,20,4,20,11,15])





//****************************************************************************************************************************************** */
/*Q10: Rotate the array to the right by k steps

TestCases - Input:[1,2,3,4,5], k=2 */  

// function rotate(arr, k){
//     let newArr = []
    
//     console.log(newArr)
// }

// rotate([1,2,3,4,5], 2)





/*Q11: Return the total sum of all didgits across all numbers

TestCases - Input:[12,34] Output:10 */  

// function totalSum(arr){
//     let sum = 0
//     let newArr = []
//     let newArr1 = []
//     let newArr2 = []

//     for (let i = 0; i < arr.length; i++) {
//         newArr1.push(arr[i] % 10) 
//     }

//     for (let j = 0; j < arr.length; j++) {
//         arr[j]/=10;
//         newArr2.push(Math.floor(arr[j]))
//     }

//     newArr = newArr1.concat(newArr2)

//     for (let k = 0; k < newArr.length; k++) {
//         sum+= newArr[k]
//     }
//     console.log(sum)
// }

// totalSum([12,34])





//***************************************************************************************************************************************** */

/*Q12: Return an object where the keys are values from the array and values are their respective counts

TestCases - Input:[1,2,1,3,2,1] 
            Output: {1:3, 2:2, 3:1}  */  

// function allCount(arr){

// }





/*Q13: Return all unique pairs (a,b) such that a + b = target

TestCases - Input:[2,4,3,5,7], target = 7 */

// function pairs(arr, target){
//     let pair 

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] == target) {
//                 console.log(`[${arr[i]}, ${arr[j]}]`)
//             }
//         }
//     }
// }

// pairs([0,2,4,3,5,7], 7)





/*Q14: Find the missing number in the array

TestCases - Input:[1,2,4,5] */  

// function missing(arr){

//     let n = arr.length + 1
//     let expSum = (n * (n+1))/2
//     let actSum = 0
//     let miss = 0

//     for (let i = 0; i < arr.length; i++) {
//         actSum += arr[i]
//     }

//     miss = expSum - actSum
//     console.log(miss)
// }

// missing([1,2,4,5])





/*Q1: Merge 2 sorted arays into one sorted array without using built-in sort 

TestCases - Input: arr1=[1,3,5] arr2=[2,4,6] 
            Output: [1,2,3,4,5,6] */  

// function mergeSort(arr1, arr2){

//     let i = 0, j = 0;
//     let result = [];

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         result.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         result.push(arr2[j]);
//         j++;
//     }

//     console.log(result);
// }

// mergeSort([1,3,5],[2,4,6])