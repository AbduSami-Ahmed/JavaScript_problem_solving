/* Q1: Given an array, find the first element that does not repeat anywhere else in the array.
Testcase 1: [9, 2, 3, 2, 6, 6] → 9 */

function nonRepeat(arr){

    for (let i = 0; i < arr.length; i++) {
            if (!arr.includes(arr[i])) {
                console.log(arr[i])       
            }
    }
}

nonRepeat([9, 2, 3, 2, 6, 6])