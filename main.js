let proxy = require('./stub/main');

//proxy.callProcedure("add(1, 2)");
let result = proxy.add(1, 2);
console.log(result);