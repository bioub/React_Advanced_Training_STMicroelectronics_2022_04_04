function logIn1s(msg) {
  setTimeout(() => {
    console.log(msg);
  }, 1000);
}

logIn1s('Hello');

// ^
// |
// |setTimeout                   log
// |logIn1s                      =>
// +------------------------------------->
// 


function createLogFunction(msg) {
  return function() {
    console.log(msg);
  }
}

const hello = createLogFunction('Hello');
hello();

// ^
// |
// |                   
// |createLogFunction   hello                 
// +------------------------------------->
// 