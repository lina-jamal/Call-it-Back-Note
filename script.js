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
function run(myCallBack, str) {
  myCallBack(str);
}

function logTheArgument(string) {
  console.log("Callback is being run with input:", string);
}

run(logTheArgument);

function firstFunction() {
  console.log("I'm the first function");
}

function secondFunction(callback) {
  callback();
  console.log("I'm the second function and I expect a callback as an input");
}

function thirdFunction(callback) {
  callback();
  console.log(
    "I'm the third function, I'm also expecting a callback as an input"
  );
}

//secondFunction(function () { firstFunction()})
thirdFunction(secondFunction(firstFunction));
// what wrong??
//how can we fix that?
thirdFunction(function () {
  secondFunction(firstFunction);
});
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

  var result = applyTo(addOne, 2);

  console.log("Result is: " + result);
}
/////////////////////////////////Asynchronous Callbacks///////

setTimeout(function () {
  console.log("Timeout over");
}, 1000);

console.log("Finished?");
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

waitOneSecondThen(printResult);
console.log("Starting!");
//////////////////////////////////////////
var x = 2;
function AddOne(num) {
  setTimeout(() => {
    x += 1;
  }, 2000);
}
console.log(x);

// function asyncAddOne(number, callback) {
//   setTimeout(function () {
//     callback(number + 1);
//   }, 3000);
// }

// function asyncMultiplyThree(number, callback) {
//   console.log("result from first function:", number);
//   setTimeout(function () {
//     callback(number * 3);
//   }, 3000);
// }

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
logAsynk();
