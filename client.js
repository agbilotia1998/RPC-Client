let proxy = require('./stub/main');
let str = "Ayush yyyyy";
let num = 4;
let addResult = add(1, 5);
let subResult = sub(2, 2);
let resultCount = find_count(str, 'y');
let resultEven = is_even(num);


addResult.then(function (val) {
  console.log("Addition result => " + val);
});

subResult.then(function (val) {
  console.log("Subtraction result => " + val);
});

resultCount.then(val => {
  console.log("Count result => " + val);
});

resultEven.then(val => {
  console.log("Is Even Result => " + val);
});