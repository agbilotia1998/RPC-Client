let request = require('request');

// function getProcedureName(expression) {
//   let splitArray = expression.split('(');
//
//   return splitArray[0].trim();
// }
//
function typeOf( obj ) {
  return ({}).toString.call( obj ).match(/\s(\w+)/)[1].toLowerCase();
}

function getArguementTypes(argValues) {
  let argTypes = [];

  for (let count = 0; count < argValues.length; count++ ) {
    argTypes.push(typeOf(argValues[count]));
  }

  return argTypes;
}

// function getArguementValues(expression) {
//   let splitArray = expression.split('(');
//   splitArray[1].trim();
//   splitArray[1] = splitArray[1].slice(0, -1);
//
//   let values = splitArray[1].split(',');
//   for(let count in values) {
//     values[count] = values[count].trim();
//   }
//
//   return values;
// }
// function callProcedure(expression) {
//   let procedure = getProcedureName(expression);
//   //let argTypes = getArguementTypes(expression);
//   let argValues = getArguementValues(expression);
//   console.log(procedure);
//   console.log(argValues);
//   // request.get({url: ''}, function (err, res) {
//   //   let serverAddress = res.body.address;
//   //   request.get({url: '/port'}, function (err, response) {
//   //     let port = response.body.port;
//   //     request.post({url: serverAddress + ":" + port, body: {
//   //       }
//   //     }, function(err, resp) {
//   //       return resp.result;
//   //     })
//   //   })
//   // });
// }
let idl = {
  number: 'int',
  boolean: 'int'
};

function marshall(procedure, argTypes, returnType) {
  let allParams = [];

  for(let count in argTypes) {
    let position = parseInt(count, 10) + 1;
    let param = {
      parameterPosition: position,
      parameterType: idl[argTypes[count]]
    };

    allParams.push(param);
  }

  let data = { serviceName: procedure,
    parameters: allParams,
    returnType: returnType
  };

  return data;
}

function add(a, b) {
  let procedure = 'add';
  let argValues = Array.prototype.slice.call(arguments);
  let argTypes = getArguementTypes(argValues);
  let returnType = 'int';
  let xdrData = marshall(procedure, argTypes, returnType);
  let options = {
    url: 'http://127.0.0.1:7000/port',
    headers: {
      'data': JSON.stringify(xdrData)
    }
  };
  // request.get({url: ''}, function (err, res) {
  //   let serverAddress = res.body.address;
    request.get(options, function (err, response) {
      if(err) {
        console.log(err);
      }
      let data = JSON.parse(response.body);
      let port = data.PORT;
      // request.post({url: serverAddress + ":" + port, body: {
      //   }
      // }, function(err, resp) {
      //   return resp.result;
      // })
     });
  // });
  return a+b;
}

module.exports = {
  //callProcedure: callProcedure
  add: add
};
