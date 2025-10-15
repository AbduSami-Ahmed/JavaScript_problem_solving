/*Q1: Write a function canVote(age) that returns true if the age is greater than or equal to 18,
otherwise false.
Testcases: canVote(20) ➞ true, canVote(17) ➞ false */

// function vote(age){
// if(age >= 18){
//     console.log("You are eligible to vote")
// }
// else{
//     console.log("You are not eligible")
// }
// }
// vote(20);



/*Q2: Write a function isEqualOrGreater(a, b) that returns true if a is greater than or equal to b.
Testcases:
Testcases: isEqualOrGreater(5, 3) ➞ true */

// function isEqualOrGreater(a, b){
//     if (a >= b){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }

// isEqualOrGreater(5,3);



/*Q3: Write a function isDiscountApplicable(age, isMember) that returns true if age is less than
18 or isMember is true.
Testcases: isDiscountApplicable(15, false) ➞ true */

// function isDiscountApplicable(age, isMember){
//     if (age < 18 || isMember == true){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }

// isDiscountApplicable(15, false);



/*Q4: Write a function strictEqual(a, b) that returns true only if both value and type are equal
(===).
Testcases: strictEqual(5, 5) ➞ true */

// function strictEqual(a,b){
//     if (a===b){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }

// strictEqual(5,5);



/*Q5: Write a function calculateTotal(price, qty, tax) that returns the total price as (price * qty) +
tax.
Testcases: calculateTotal(100, 2, 20) ➞ 220 */

// function calculateTotal(price, qty, tax){
//     let cal = (price * qty) + tax;
//     console.log(cal)
// }

// calculateTotal(100,2,20);



/*Q6: Write a function grantAccess(isAdmin, isEditor, isViewer) that returns:
 "Admin" if isAdmin is true
 "Editor" if not admin but isEditor is true
 "Viewer" if only isViewer is true
 "No Access" otherwise.
Use logical operators e􀆯iciently.
Testcases: grantAccess(true, false, false) ➞ "Admin" */

function grantAccess(isAdmin, isEditor, isViewer){
    if (isAdmin == true) {
        console.log("Admin");
    } else if (isEditor == true) {
        console.log("Editor");
    } else if (isViewer == true) {
        console.log("Viewer");
    } else{
        console.log("No Access");
    }
}

grantAccess(false, true, true);



/*Q7: Write a function getGrade(marks) that returns the grade:
 A if marks ≥ 90
 B if marks ≥ 75 and < 90
 C if marks ≥ 50 and < 75
 F if marks < 50.
Testcases: getGrade(92) ➞ "A" */

// function getGrade(marks){
//     if (marks >= 90) {
//         console.log("A")
//     } else if (marks >= 75 && marks < 90) {
//         console.log("B")
//     } else if (marks >= 50 && marks < 75) {
//         console.log("C")
//     } else if (marks < 50) {
//         console.log("F")
//     }
//     else{
//         console.log("Invalid Marks")
//     }
// }

// getGrade(92);



/* Q8: Write a function isStrongPassword(passwordLength, hasSpecialChar, hasNumber) that
returns true if the password length is at least 8 and it contains either a special character or
a number.
Testcases: isStrongPassword(10, true, false) ➞ true */

// function isStrongPassword(passwordLength, hasSpecialChar, hasNumber){
//     if (passwordLength >= 8 || hasSpecialChar == true || hasNumber == true){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }

// isStrongPassword(10, true, false);



/* Q9: Write a function calculateBill(units) that calculates:
 ₹5 per unit for units ≤ 100
 ₹8 per unit for units between 101–300
 ₹10 per unit for units > 300
Return the total amount.
Testcases: calculateBill(50) ➞ 250 */

// function calculateBill(units){
//     let cal;
//     if (units <= 100) {
//         cal = units*5;
//         console.log(cal)
//     } else if (units >= 101 && units <= 300) {
//         cal = units*8;
//     } else if (units > 300) {
//         cal = units*10;
//     }
// }

// calculateBill(50);



/* Q10: Write a function complexCheck(a, b, c) that returns true if:
 a is greater than both b and c
 OR if b equals c strictly.
Testcases: complexCheck(10, 5, 3) ➞ true */

function complexCheck(a,b,c){
    if(a > b && a > c || b === c){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

complexCheck(10, 5, 3);