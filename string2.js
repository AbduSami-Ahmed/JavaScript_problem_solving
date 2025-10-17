/* Q1: Write a function that checks if a given string is a palindrome. Ignore spaces and case
sensitivity.

Testcases: "Race car" ➝ true ,  "Hello" ➝ false ,   "Madam" ➝ true  */

// function palindrome(str){
//     let newStr = str.replace(/\s/g, "").toLowerCase();
//     let arr = newStr.split("");
//     let start = arr[0];
//     let end = arr.length - 1;
//     let palO = true
    
//     while(start < end){
//         if(arr[start] != arr[end]){
//             pal = false;
//             break;
//         }
//         start++;
//         end--;
//     }
//     if(pal){
//         console.log("It is a palindrome")
//     }
//     else{
//         console.log("It is not a palindrome")
//     }
// }

// palindrome("Race car")



/* Q1: Write a function that counts the number of vowels and consonants in a string. Return the
result as "Vowels: x, Consonants: y".

Testcases: "OpenAI" ➝ "Vowels: 4, Consonants: 2"  */

// function count(str){
//     let newStr = str.toLowerCase().split("");
//     let countV = 0;
//     let countC = 0;
//     let vow = ["a","e","i","o","u"];
//     let vow = "aeiou"
// vow.indexOf(character) >=0 constant[`${charater}`]

//     for(let i = 0; i < newStr.length; i++){
//         for(let j = 0; j < vow.length; j++){
//             if(newStr[i] == vow[j]){
//                 countV++;
//             }
//             else{
//                 countC++;
//             }
//         }
//     }
//     console.log("Vowels: ", countV)
//     console.log("Consonents: ", countC)
// }

// count("OpenAI");



/* Q3: Write a function to find the longest word in a sentence. If multiple words are of the same
length, return the first one.

Testcases: "I love programming" ➝ "programming"  */

function longWord(str){
    let newStr = str.split(" ");
    let maxCount = 0;
    for(let i=1; i<newStr.length; i++){
        if(newStr[i].length > newStr[maxCount].length){
            maxCount = i;
        }
    }
    console.log(newStr[maxCount]);
}

longWord("Iprogramming love programming")



/* Write a function that returns an array of all indexes where a given character appears in the
string. Case-sensitive.

Testcases: ("banana", "a") ➝ [1, 3, 5]  */

function repeat(str, letter){

}