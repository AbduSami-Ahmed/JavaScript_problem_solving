/* Q1: Write a function maskEmail(email) that hides everything in the email before the “@”
except the first and last character, replacing the middle characters with *. Example: johnwick@gmail.com → j****k@gmail.com

Testcases: maskEmail("johnwick@gmail.com") ➞ "j****k@gmail.com" */

// let str = "samiahmed@gmail.com"


// function maskEmail(email){
//     var emArr = email.split("");
//     let stop = email.indexOf("@")
//     for(i = 1; i < stop-1; i++){
//         emArr[i]="*";
//     }
//     let emJoin = emArr.join("");
//     console.log(emJoin)
// }



/* Q2: Write a function reverseString(str) that returns the string reversed without using .reverse().

Testcases: reverseString("hello") ➞ "olleh" */

function reverseString(str){
    let newStr = str.split("");

    for(let i = 0; i < newStr.length/2; i++){
        let a = newStr[i];
        let b = newStr[newStr.length-i-1];
        newStr[i] = b;
        newStr[newStr.length-i-1] = a;
    }
    let Str = newStr.join("")
    console.log(Str)
}

reverseString("hello i am sami");



/* Q3: Write a function capitalizeEnds(str) that returns a string with first and last character in
uppercase and the rest as-is.

Testcases: capitalizeEnds("hello") ➞ "HellO" */

// function capitalizeEnds(str){
//     str = str.split("");
//     str[0] =  str[0].toUpperCase();
//     str[str.length-1] =  str[str.length-1].toUpperCase();
    
//     return str.join("")
// }
// console.log(capitalizeEnds("hello"));



/* Q4: Write a function extractDomain(email) that returns only the domain part of an email (the
part after @).

Testcases:extractDomain("user@gmail.com") ➞ "gmail.com" */

// function extractDomain(email){
//     let index = email.indexOf("@");
//     let domain = email.slice(index+1)
//     console.log(domain);
// }

// extractDomain("user@gmail.com");



/* Q5: Write a function countWords(sentence) that returns the number of words in the sentence.
(Words are separated by spaces.)

Testcases: countWords("Hello world") ➞ 2 */

// function countWords(sentence){
//     let Str = sentence.split(" ");
//     let count=0;

//     for(let i = 0; i < Str.length; i++){
//         count++;
//     }
//     console.log(count)
// }

// countWords("Hello World Sami Ahmed")



/* Q6: Write a function swapCase(str) that converts uppercase letters to lowercase and vice
versa.

Testcases: swapCase("Hello") ➞ "hELLO" */

// function swapCase(str){
//     let newStr = str.split("");
//     let fStr

//     for(let i = 0; i< newStr.length; i++){
//         if(newStr[i]==newStr[i].toUpperCase()){
//             newStr[i] = newStr[i].toLowerCase()
//         }
//         else{
//             newStr[i] = newStr[i].toUpperCase()
//         }
//         fStr = newStr.join("");
//     }
//     console.log(fStr);
// }

// swapCase("Hello");



/* Q7: Write a function isPalindrome(str) that returns true if the string reads the same backward
and forward, ignoring case.

Testcases: isPalindrome("Madam") ➞ true */

// function isPalindrome(str){
//     let newStr = str.split("");
//     let start = newStr[0]
//     let end = newStr.length-1;
//     let pal = true;

//     while(start<end){
//         if(newStr.charAt(start)!=newStr.charAt(end)){
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

// isPalindrome("Madam")



/* Q8: Write a function smartGreeting(name, age) that returns:
 "Hello [name], you are [age] years old!" if age >= 18
 "Hi [name], you’re just [age]!" otherwise.
Use template literals.

Testcases: smartGreeting("Alice", 20) ➞ "Hello Alice, you are 20 years old!" */

// function smartGreeting(name,age){
//     if(age>=18){
//         console.log(`Hello ${name}, you are ${age} years old!`);
//     }
//     else{
//         console.log(`Hello ${name}, you're just ${age}!`);
//     }
// }

// smartGreeting("Alice", 20);



/* Q9: Write a function getInitials(fullName) that converts a full name into initials.
Example: “John Wick” → “J.W.”

Testcases: getInitials("John Wick") ➞ "J.W." */

// function getInitials(fullName){
//     let newStr = fullName.split(" ");
//     let In = "";

//     for(let i = 0; i < newStr.length; i++){
//         if(newStr[i].length > 0){
//             In = In + newStr[i][0].toUpperCase() + ".";
//         }
//     }
//     return In
// }

// console.log(getInitials("Sami Ahmed"));



/* Q10: Write a function hideVowels(str) that replaces all vowels (both lowercase and uppercase)
with *.

Testcases: hideVowels("Hello World") ➞ "H*ll* W*rld" */

function hideVowels(str){
    let newStr = str.split("");
    let vow = ["a", "e", "i", "o", "u"];
    // let hide = ""

    for(let i = 0; i < newStr.length; i++){
        for(j=0; j < vow.length; j++){
        if(newStr[i] == vow[j]){
            newStr[i] = "*";
        }
    }
}
    let returnStr = newStr.join("");
    console.log(returnStr)
}

hideVowels("Hello World");