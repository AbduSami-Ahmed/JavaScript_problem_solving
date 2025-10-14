/*Q1: Write a function deepFilterFalsy(arr) that takes a nested array of any depth and returns a
flattened array with all falsy values removed. */

function deepfilterfalsy(){

let arr=[0, 1, "",false, "JS"];
let a = 99

    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == false){
            arr[i] = a; 
       }
       
    }
    console.log(arr);
}
deepfilterfalsy()