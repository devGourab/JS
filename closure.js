// Scoping
//
// function init() {
//   var firstname = "kernel";
//   console.log(firstname);
//
//   function sayFirstName() {
//     console.log(`your firstname is ${firstname}`);
//   }
//     // Return The Functions
//   return sayFirstName
// }
//

// Reference of init Because of sayFirstName is return
// var value = init();
// value()


// Example-2

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}


var addition = doAddition(100);
console.log(addition(200));

// same as use doAddition function using closure
console.log(doAddition(200)(500));
