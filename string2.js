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
//     let vow = "aeiou"

//     for(let i = 0; i < newStr.length; i++){
//         let char = newStr[i];
//             if(vow.includes(char)){
//                 countV++;
//             }
//             else{
//                 countC++;
//             }
//     }
//     console.log("Vowels: ",countV)
//     console.log("Consonents: ",countC)
// }

// count("OpenAI");



/* Q3: Write a function to find the longest word in a sentence. If multiple words are of the same
length, return the first one.

Testcases: "I love programming" ➝ "programming"  */

// function longWord(str){
//     let newStr = str.split(" ");
//     let maxCount = 0;
//     for(let i=0; i<newStr.length; i++){
//         if(newStr[i].length > newStr[maxCount].length){
//             maxCount++;
//         }
//     }
//     console.log(newStr[maxCount]);
// }

// longWord("I love programming")



/* Q4: Write a function that returns an array of all indexes where a given character appears in the
string. Case-sensitive.

Testcases: ("banana", "a") ➝ [1, 3, 5]  */

// function repeat(str, letter){
//     let newStr = str.split("");
//     let arr = [];
//     console.log(newStr)

//     for(let i = 0; i < newStr.length; i++){
//         if(letter == newStr[i]){
//             arr.push(i);
//         }
//     }
//     console.log(arr)
// }

// repeat("banana", "a")



/* Q5: Write a function to check if two strings are anagrams (contain the same letters in any
order). Ignore case and spaces.

Testcases: "listen", "silent" ➝ true */

// function anagrams(str, word){
//     let newStr = str.split("");
//     let newWord = word.split("");
//     let isTrue = true

//     for(let i = 0; i < newStr.length; i++){
//         let match = false
//         for(let j = 0; j < newWord.length; j++){
//             if(newStr[i]==newWord[j]){
//                 match = true
//             }
//         }
//         if(!match){
//             isTrue = false
//         }
//     }
//     return(isTrue)
    
// }
// console.log(anagrams("listen", "silent"));




/* Q6: Write a function that removes all duplicate characters from a string, keeping only the first
occurrence of each.

Testcases: "programming" ➝ "progamin"  */

// function duplicate(str){
//     let newStr = str.split("");
    
// }



/* Q7: Write a function that extracts and returns all words from a sentence that start with an
uppercase letter.

Testcases: "Hello World from ChatGPT" ➝ ["Hello","World","ChatGPT"]  */

// function extract(str){
//     let newStr = str.split(" ");
//     let arr = []

//     for (let i = 0; i < newStr.length; i++) {
//         if(newStr[i][0] == newStr[i][0].toUpperCase()){
//             arr.push(newStr[i]);
//         }
//     }
//     return arr;
// }

// console.log(extract("javascript Is fun"));



/* Q8: Reverse the characters of each word in a sentence but keep the order of words the same.

Testcases: "Hello World" ➝ "olleH dlroW"  */

function reverse(str){
    let newStr = str.split(" ");
    let word = newStr[0].split("");
    
    console.log(newStr);
    console.log(word);

}

reverse ("Hello World");



/* Q9: Write a function that returns the frequency of each character in a string (excluding spaces).

Testcases: "hello" ➝ {h:1, e:1, l:2, o:1}  */

function frequency(str){
    let newStr = str.split("");
    
}

/* Q10: Write a function that truncates a string if it exceeds a given length and adds "..." at the end.

Testcases: ("JavaScript", 5) ➝ "JavaS..."  */

// function trunacate(str, a){
//     let newStr = str.split("");
//     let arr = ""

//     for (let i = 0; i < newStr.length; i++) {
//         if(i <= a){
//             arr = arr + newStr[i]
//         }
//     }
//     arr+="...";
//     console.log(arr)
// }

// trunacate("JavaScript", 5);