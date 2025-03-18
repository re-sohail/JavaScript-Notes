console.log("------------- Example 1 -------------");

const val = "30";
console.log(typeof val); //String
console.log(Number(val)); // 30 -> it easily convert valid String Number in to Number
console.log(typeof Number(val)); //NUmber

console.log("------------- Example 2 -------------");

const val1 = "data is like";
console.log(typeof val1); // String
console.log(Number(val1)); // NaN -> value of val1 is not valid String Number there is not Number of Val1.
console.log(typeof Number(val1)); // number -> why NaN Type Number: NaN is Not-a-number but it is still consider as number. NaN is a special numeric value that indicates an undefined or unrepresentable result

console.log("------------- Example 3 -------------");

let a = undefined;
console.log(Number(a)); // NaN
console.log(typeof Number(a)); // Number

console.log("------------- Example 4 -------------");
//

// Numaric Converstion rules
// 1. "undefine" will give "NaN"
// 2. "null" wiill give "0"
// 3. "true, false" will give "1, 0"
// 4. "valid String Number" will give "number"
// 5. "Not valid" will give "NaN"

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("40")); // 40 because "40" is valid String Number
console.log(Number("40a")); // NaN because "40a" is not valid number in numaric value
console.log(Number("     123     ")); // 123 -> it remove the spaces
console.log(Number(""));

console.log("------------- Example 5 -------------");

// Check Number is NaN
const b = undefined;
console.log(Number.isNaN(Number(b))); // true

// in details
const c = undefined;
const d = Number(c);

if (Number.isNaN(d)) {
  console.log("Value is NaN");
} else {
  console.log("Value is", d);
}

console.log("------------- Example 6 -------------");

const e = undefined;

console.log(Number.isNaN(e)); // false -> it give false due to it not convert into number. it is use only to chevk the number is NaN. if number is NaN then will give true as it give in "Example 5"

console.log("------------- Example 7 -------------");
const f = undefined;

console.log(isNaN(f)); // true because first it convert f into number then it was NaN then it give true
