let proxy = require('./stub/main');
let str = "Ayush yyy";
let num = 4;

async function main() {
  let addResult = await add(6, 5);
  let subResult = await sub(5, 2);
   //let resultCount = find_count(str, 'y');
   //let resultEven = await is_even(num);

   //console.log(resultEven);
  console.log("Addition result => " + addResult);
  console.log("Subtraction result => " + subResult);
}

main();
// resultCount.then(val => {
//   console.log("Count result => " + val);
// });
//
// resultEven.then(val => {
//   console.log("Is Even Result => " + val);
// });