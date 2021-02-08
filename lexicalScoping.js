// Lexical Scoping

function init() {
  var firstname = "kernel";
  function sayFirstName() {
    console.log(`your firstname is ${firstname} `);
    }
    // calling The Functions
  sayFirstName();
}
init();
