let proxy = require('./stub/main');
let str = 'Ayush yyyyy';
let num = 4;
let addResult = proxy.callProcedure('add', 'number', 1, 5);
let subResult = proxy.callProcedure('sub', 'number', 2, 2);
let resultCount = proxy.callProcedure('find_count', 'number', str, 'y');
let resultEven = proxy.callProcedure('is_even', 'number', num);
addResult.then(function (val) {
    console.log('Addition result => ' + val);
});
subResult.then(function (val) {
    console.log('Subtraction result => ' + val);
});
resultCount.then(val => {
    console.log('Count result => ' + val);
});
resultEven.then(val => {
    console.log('Is Even Result => ' + val);
});