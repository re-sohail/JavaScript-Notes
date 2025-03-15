console.log("------------ Conversion Methods ----------");
// 1. Conversion Methods

// toString() -> Covert number into string (str)
const num = 10;
const str = num.toString();

console.log(str); // 10
console.log(typeof str); // string

console.log("----------------------");

// toFixed -> remove the extra deciemal and show only deciemal number that we want and it return string value
const a = 20.3523423423;
console.log(typeof a);

const toFixed = a.toFixed(2); // useful for currency

console.log(toFixed); // 20.34
console.log(typeof toFixed); // Warning: Returns a string, not a number!

console.log("----------------------");

// Number(), parseIn(), parseFloat() -> Convert string (str) to number

const b = "40";
// const b = "40s"; -> if we add other character that cannot convert into number then it give NaN

console.log(typeof b); // string()

const number = Number(b);
// const number = parseInt(b);
// const number = parseFloat(b);

console.log(number); // 40
console.log(typeof number); // Number

console.log("----------------------");

// toExponential() -> Convert Number into Scientific Notation and return string value
const c = 5020;

const exponential = c.toExponential();

console.log(exponential);
console.log(typeof exponential); // Warning: Returns a string, not a number!

console.log("----------------------");

// toPrecision() -> it give value that we want if number is larger or smaller and return string value
const d = 12.3;

const precision = d.toPrecision(5);
console.log(precision);
console.log(typeof precision); // Warning: Returns a string, not a number!

console.log("----------- Static Properties -----------");
// 2. Static Properties

// Number.isNaN()
const isNan = "40a";

console.log(typeof isNan); // str
// console.log(typeof isNaN); // function

const checkNumber = Number.isNaN(isNan); // it will give true or false and if we use the only "Number.isNaN()" then it check only and it not convert into number

console.log(checkNumber); // false
console.log(typeof checkNumber); // boolean

function check() {
  for (let i = 1; i <= 5; i++) {
    console.log("jjjjj");
    setTimeout(() => {
      console.log("alue", i);
    }, 0);
  }
}

check();

function hello() {
  setTimeout(() => {
    console.log("112233");
  }, 0);

  Promise.resolve(console.log("129129010291"));
  console.log("000000");
}
