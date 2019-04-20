let proxy = require('./stub/main');
let str = 'Ayush yyy';
let num = 4;
async function main() {
    let addResult = await proxy.callProcedure('add', 'number', 6, 5);
    let subResult = await proxy.callProcedure('sub', 'number', 5, 2);
    console.log('Addition result => ' + addResult);
    console.log('Subtraction result => ' + subResult);
}
main();