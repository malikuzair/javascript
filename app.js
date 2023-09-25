//Chapter 21 
//Q1
var allLower = userInput.toLowerCase();
//Q2
let x = "Hello World";
 x = x.toLowerCase();
console.log(x);
//Q3
let y = "Hello World";
 y = y.toLowerCase();
console.log(y);
//q4
let originalStr = "Example STRING";
let lowerStr;

lowerStr = originalStr.toLowerCase();

console.log(lowerStr);
//q5
let arr = ["ExampleString"];
let lowercaseString = arr[0].toLowerCase();
//q6
let str = "your string";
let upperCaseStr = str.toUpperCase();
alert(upperCaseStr);
//q7
var userinput = KaRaChi

var firstChar = userinput.slice(0, 1).toUpperCase();

var RemainChar = userinput.slice(1).toLowerCase();

var combineInput = firstChar + RemainChar;

console.log(combineInput)


//Chapter 22
//q1
let sameWords = "captain";
let result = sameWords.slice(1, 3);

//q2
let myString = "Hello, world!";
let stringLength = myString.length;
console.log(stringLength);
//q3
let seg;
let animal = "elephant";
let seg = animal.slice(2, 6);
//q4
let str = "example";
let numChars = str.length;
let charCount = numChars;
//q5
let yourString = "examplestring";
let charCount = yourString.length;
let slicedString = yourString.slice(1, charCount - 3);
let newVariable = slicedString;
//q6
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx); // Output: 3//
//q7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx); // Output: 16//
//q8
let indx;
indx = text.lastIndexOf("go");
indx = indx - 2;
console.log(indx);

//Ch 26
//q1
const number = 3.7;
const roundedNumber = Math.round(number);
console.log(roundedNumber);
//q5
let roundedValue;
roundedValue = Math.round(0.5);
console.log(roundedValue);
//ch 27

//q1
const randomNumber = Math.floor(Math.random() * 50) + 1;
console.log(randomNumber);

//ch28-29
//q1

const myString = "42";
const myInt = parseInt(myString, 10);
console.log(myInt); // Output: 42


//ch30
//q1

let num = 3.14159;
let newNum = num.toFixed(4);
console.log(newNum); // Output: "3.1416"

//q2
variable =
parseFloat(variable.toFixed(2).toString());
//q3 
if (num.toFixed(2).toString().length > 4) {
    // code to be executed if the condition is true
}

//q4
let num = 123.456789;
let roundedNum = num.toFixed(2);
alert(roundedNum);