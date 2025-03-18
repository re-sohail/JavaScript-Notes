// Example 1
const a = true;
console.log(typeof a); // boolean

const b = String(a);
console.log(typeof b); // String

console.log("-----------------------------");

// Example 2
const c = false;
console.log(typeof c); // boolean

const d = c.toString(); // this is also used to convert value into String but it has many faults
console.log(typeof d); // string

console.log("-----------------------------");

// Example 3

const val = 3.2;
console.log(typeof val); // number;

const valStr = val.toString(); // in this case it is well
console.log(typeof valStr, valStr); // string

console.log("-----------------------------");

// Example 4

const val2 = 2;
console.log(typeof val2); //number

const valStr2 = val2.toString(); // in this case, it may cause other opertaions like 2. and we write "2.toString()" then it give SyntaxError" in js, dot (".") is used for two task one is used fot "properties and other for decimal so use "String()" funcation instead of "toString()" function. because we need to write like "(2).toString()""
// console.log((2).toString());

console.log(typeof valStr2); // string

console.log("-----------------------------");
