function sum(n1, n2) {
  return n1 + n2;
}

// function has properties
// sum.name
// sum.length
// sum.arguments
//sum.caller

// function has method
// sum.toString();
// sum.call();

//1-function is an instance of the Object type
// sum instanceof Object;
//2-store functions in other data structures:

// const sumObj = {
//   sum: function sum(a, b) {
//     return a + b;
//   },
// };

//3-function  can be assigned to a variable:
// const sumNum = sum;

// //4-functions can pass as arguments to other functions:
// const addtwo = (num) => num + 2;
// const apply = (fun, num) => fun(num);

//5-You can return a function from a function:

// const addOne = (a) => a + 1;
// const apply = () => addOne;

/// *** Higher Order Functions ***

// function run(myCallBack) {
//   myCallBack();
// }

// function theCallBack() {
//   console.log("Jack, come back");
// }

//Q: How do I pass a function as an argument, though thinking?

// run(function () {
//   console.log("Hi from callBack");
// });

//Q: what is the difference between these two examples?
// Example 1
// run(theCallBack);

// // Example 2
// run(theCallBack());

//Pass a function into another and call it with arguments
//Higher Order Functions
function run(myCallBack, str) {
  myCallBack(str);
}

function logTheArgument(string) {
  console.log("Callback is being run with input:", string);
}

// run(logTheArgument, "hi");

////////////////////////////Synchronous Callbacks///////

function syncfun() {
  function logArgument(x) {
    console.log("Passed: " + x);
  }

  [1, 2, 3].forEach(logArgument);

  console.log("Done");
}

function syncFun() {
  function addOne(x) {
    return x + 1;
  }

  function applyTo(callback, value) {
    return callback(value);
  }

  const result = applyTo(addOne, 2);

  console.log("Result is: " + result);
}
/////////////////////////////////Asynchronous Callbacks///////

// setTimeout(function () {
//   console.log("Timeout over");
// }, 1000);

// console.log("Finished?");

////////////////////////////
// This is our asynchronous function
function waitOneSecondThen(callback) {
  var result = 10;
  setTimeout(function () {
    callback(result);
  }, 1000);
}

// This is our callback!
function printResult(value) {
  console.log("Result is " + value);
}

// waitOneSecondThen(printResult);
// console.log("Starting!");

//////////////////////
function printResult(value) {
  console.log("Result is " + value);
  return value;
}

// const result = waitOneSecondThen(printResult);

// console.log("Starting");
// console.log("Return value is " + result);
//////////////////////////////////////////
var x = 2;
function AddOne(num) {
  setTimeout(() => {
    x += 1;
  }, 2000);
}
// console.log(x);

function asyncAddOne(number, callback) {
  setTimeout(function () {
    callback(number + 1);
  }, 3000);
}

function asyncMultiplyThree(number, callback) {
  console.log("result from first function:", number);
  setTimeout(function () {
    callback(number * 3);
  }, 3000);
}

// asyncAddOne(10, function(newNumber) {
//   asyncMultiplyThree(newNumber, function(result) {
//     console.log("final result:", result);
//   })
// });

///////////////////////////////////

function logAsynk() {
  console.log("hello callback");
  setTimeout(function () {
    console.log("one");
  }, 2000);
  setTimeout(function () {
    console.log("two");
  }, 1000);
  setTimeout(function () {
    console.log("three");
  }, 0);
  console.log("finish");
}
// logAsynk();
/////////////////////  Callback Hell  //////////////////////
// function first(callback) {
//   console.log("I'm the first function and expect a callback as an input");
//   callback();
// }

// function second(callback) {
//   console.log("I'm the second function and expect a callback as an input");
//   callback();
// }

// function third() {
//   console.log("I'm the third function, I'm just a regular function");
// }

// second(third);
// first(second(third));

// function first(callback) {
//   setTimeout(function () {
//     console.log("I'm the first function and expect a callback as an input");
//     callback();
//   }, 10);
// }

// function second(callback) {
//   setTimeout(function () {
//     console.log("I'm the second function and expect a callback as an input");
//     callback();
//   }, 10);
// }

// function third() {
//   console.log("I'm the third function, I'm just a regular function");
// }
