/*Q1: You are given a string. Find and return the first character that does not repeat anywhere
else in the string. The comparison should be case-insensitive, but you should return the character in its
original case. If every character repeats, return null.

Testcases: "stress" → "t" , "aabbcc" → null */

// function repeat(str){
//     let newStr = str.toLowerCase();

//     for (let i = 0; i < newStr.length; i++) {
//         let char = newStr[i]

//         if (newStr.indexOf(char) == newStr.lastIndexOf(char)) {
//             return str[i];
//         }
//     }
//     return null
// }

// console.log(repeat ("stress"));




/*Q2: Given a string written in snake_case (words separated by underscores), convert it into
camelCase format. The first word should remain lowercase, and every subsequent word should start with an
uppercase letter.

Testcases: "hello_world" → "helloWorld" */

// function Case(str){
//     let newStr = str.split("_");
//     let res = ""
//     let result = ""
//     console.log(newStr)

//     for (let i = 1; i < newStr.length; i++) {
//         newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1)
//         res += newStr[i]
//         result = newStr[0] + res

//     }
//     console.log(result);
// }


// Case("hello_world");




/*Q3: You are given a string that may contain both text and numbers. Extract all the numbers from the string and return them as an array of integers.
If there are no numbers, return an empty array.

Testcases: "I have 2 apples and 5 bananas" → [2, 5] */

// function Return(str){
//     let newStr = str;
//     let res = "0123456789"
//     let result = []
//     console.log(newStr)

//     for (let i = 0; i < newStr.length; i++) {
//         if(res.includes(newStr[i])){
//             result.push(newStr[i])
//         }
//     }
//     console.log(result)
// }


// Return("I have 2 apples and 5 bananas")

// function extract(str) {
//   let matches = str.match(/\d+/g);
 
//   if (!matches) return [];

//   return matches.map(Number);
// }

// console.log(extract("I have 2 apples and 5 bananas"))





/*Q4: A string may contain HTML tags like <p>, <div>, <b>, etc. Remove all the tags and return only the plain text content without any markup.

Testcases: "<p>Hello</p>" → "Hello" */

// function remove(str){
//     let result = str.replace(/<[^>]*>/g, '')
//     console.log(result)
// }

// remove("<div><b>Bold</b> Text</div>")





/*Q5: Find the character that occurs most frequently in the given string (ignore case). If more than one character has the same highest frequency, return the alphabetically first
one.

Testcases: "mississippi" → "i" */

// function same(str){
//   let newStr = str.split("");

//   for (let i = 0; i < newStr.length; i++) {
//     let char = newStr[i];

//     if (newStr.indexOf(char) != newStr.lastIndexOf(char)) {
//       return str[i]
//     }
//   }
//   return null
// }

// console.log(same("mississippi"));





/*Q6: Given two strings, determine if one is a rotation of the other. For example, "erbottlewat" is a rotation of "waterbottle".

Testcases: "waterbottle", "erbottlewat" → true */

// function rotate(str, str1){
//   let newStr = str.split("");
//   let newStr1 = str1.split("");
//   let isTrue = true;

//   for (let i = 0; i < newStr.length; i++) {
//     let match = false
//     for (let j = 0; j < newStr1.length; j++) {
//       if (newStr[i] == newStr1[j]) {
//         match = true
//       }
//     }
//     if (!match) {
//       isTrue = false
//     }
//   }
//   return isTrue
// }

// console.log(rotate("waterbottle", "erbottlewat"))





/*Q7: Find the character that occurs most frequently in the given string (ignore case). If more than one character has the same highest frequency, return the alphabetically first
one.

Testcases: "mississippi" → "i" */