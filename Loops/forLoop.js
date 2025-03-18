// Pattern: this s goode way to undersatnd the loop

console.log("------------- Triangle Pattern -------------");

const row = 5;
let pattern = "";

for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);

console.log("------------- Triangle Pattern (Reverse Order) -------------");

for (let i = row; i >= 1; i--) {
  for (let j = 1; j <= row - i + 1; j++) {
    pattern += j;
  }
  pattern += "\n";
}

console.log(pattern);

console.log("------------- Triangle Pattern -------------");

// const rows = 10;
// let pattern = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);

// console.log("------------- Triangle Pattern 2 -------------");

// const rows = 5;
// let pattern = "";

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= i; j++) {
//     pattern += i;
//   }
//   pattern += "\n";
// }

// console.log(pattern);

console.log("------------- Triangle Pattern 2 -------------");

// 1
// 23
// 456
// 78910

// const rows = 4;
// let pattren = "";
let variable = 1;

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattren += variable;
    variable++;
  }
  pattren += "\n";
}

console.log(pattren);
