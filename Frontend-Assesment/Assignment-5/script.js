// Assignment 1 – Introduction to JavaScript and Basic Programming


// TASK 1: Create your first JavaScript program
console.log("========== TASK 1: MY DETAILS ==========");
let myName = "Rahul";
let myAge = 22;
let myCourse = "MCA";
let myCollege = "KIET";

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Course:", myCourse);
console.log("College Name:", myCollege);


// TASK 2: Working with variables
console.log("\\n========== TASK 2: VARIABLES ==========");
let name = "Rahul";
let age = 22;
let course = "MCA";
let isStudent = true;

console.log("name =", name, "| type:", typeof name);
console.log("age =", age, "| type:", typeof age);
console.log("course =", course, "| type:", typeof course);
console.log("isStudent =", isStudent, "| type:", typeof isStudent);


// TASK 3: Basic arithmetic operations
console.log("\\n========== TASK 3: ARITHMETIC ==========");
let a = 20;
let b = 6;

console.log("Sum (a + b):", a + b);                
console.log("Difference (a - b):", a - b);         
console.log("Product (a * b):", a * b);            
console.log("Division (a / b):", a / b);           
console.log("Remainder (a % b):", a % b);          


// TASK 4: Using alert()
function showWelcomeAlert() {
  alert("Welcome to JavaScript Programming!");
}
// showWelcomeAlert();

function showDetailsAlert() {
  alert("Name: " + myName + "\nCourse: " + myCourse);
}
// showDetailsAlert();

// TASK 5: Predict the output
console.log("\\n========== TASK 5: PREDICT THE OUTPUT ==========");
console.log("10 + 5 =", 10 + 5);  // 15
console.log("10 - 5 =", 10 - 5);  // 5
console.log("10 * 5 =", 10 * 5);  // 50
console.log("10 / 5 =", 10 / 5);  // 2
console.log("10 % 3 =", 10 % 3);  // 1

// TASK 6: let and const
console.log("\\n========== TASK 6: let AND const ==========");
let studentName = "Amit";
const collegeName = "KIET";

console.log("Original studentName:", studentName);
console.log("Original collegeName:", collegeName);

studentName = "Amit Kumar"; // Allowed: let can be reassigned.
console.log("Updated studentName:", studentName);

try {
  collegeName = "ABC College";
} catch (error) {
  console.log("Trying to change collegeName caused an error:", error.name + ": " + error.message);
}
console.log("collegeName remains:", collegeName);

// Observation:
// 1. A let variable can be assigned a new value.
// 2. A const variable cannot be reassigned after initialization.

// TASK 7: Identify data types using typeof
console.log("\\n========== TASK 7: DATA TYPES ==========");
let marks = 85;
let studentNameForTypes = "Rahul";
let passed = true;

console.log("marks:", marks, "| typeof:", typeof marks);                       // number
console.log("studentName:", studentNameForTypes, "| typeof:", typeof studentNameForTypes); // string
console.log("passed:", passed, "| typeof:", typeof passed);                    // boolean