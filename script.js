// function sum(n1, n2) {
//   return n1 + n2;
// }

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

//Q: How do I pass a function as an argument, though thinking?
function run(fun) {
  fun(); // thecallbacck() // udefined()
}

function theCallBack() {
  console.log("Jack, come back");
}

// run(theCallBack());
// run(function () {
//   console.log("Hi from callBack");
// });

//Q: what is the difference between these two examples?
// Example 1
// run(theCallBack);

// // Example 2
// run(theCallBack());

//Pass a function into another and call it with arguments

function run(fun, fun2, str) {
  fun(str); //logTheArgument(str)
  fun2(str);
}

function logTheArgument(string) {
  console.log("Callback is being run!");
  console.log(string); //Done
}
function log(string) {
  // console.log("Callback is being run!");
  console.log(string); //Done
}

// run(logTheArgument, log, "Finish");

//////////////////////////
// function run(myCallBack, str) {
//   myCallBack(str);
// }

// function logTheArgument(string) {
//   console.log("Callback is being run with input:", string);
// }

// run(logTheArgument, "hi");

////////////////////////////Synchronous Callbacks///////

// function syncfun() {
//   function logArgument(x) {
//     console.log("Passed: " + x); // passed 7
//   }

//   [1, 2, 3].forEach(logArgument);

//   console.log("Done");
// }
///////////////////////

// function first(fun) {
//   console.log("first fun");
//   fun();
// }
// function sec() {
//   console.log("sec fun");
// }

// function third() {
//   console.log("third fun");
// }
// first(third);
// // sec();
// // third();

/////////////////////
// function syncFun() {
// function addOne(x) {
//   return x + 1;
// }

// function applyTo(callback, value) {
//   return callback(value); //addOne(2)
// }

// const result = applyTo(addOne, 2);

// console.log("Result is: " + result);
// }
// syncFun();

/////////////////////////////////Asynchronous Callbacks///////

// setTimeout(function () {
//   console.log("Timeout over");
// }, 1000);
// setTimeout(function () {
//   console.log("No Waiting");
// }, 0);

// console.log("Finished?");

////////////////////////////
// This is our asynchronous function
// function getStudent(callback) {
//   setTimeout(function () {
//     console.log("getting Student...");
//     callback();
//   }, 1000);
//   // console.log("get Student");
// }

// function processStudent() {
//   console.log("process Student....");
// }

// function deleteStudent() {
//   console.log("delete Student....");
// }
// function renderHtml() {
//   console.log("render");
// }
// getStudent(() => console.log("edit student"));
// processStudent();
// renderHtml();

// function getStudent() {
//   // console.log("getting Student....");
//   setTimeout(function () {
//     console.log("getting Student....");
//     processStudent();
//   }, 2000);
// }

//////////////////////////////set
// function waitOneSecondThen(callback) {
//   var result = 10;
//   setTimeout(function () {
//     callback(result);
//   }, 1000);
//   // return "hi";
// }

// // This is our callback!
// function printResult(value) {
//   console.log("Result is " + value);
//   // return value;
// }

// let n = waitOneSecondThen(printResult);
// console.log("Starting!");
// console.log(n);

//////////////////////
// function printResult(value) {
//   console.log("Result is " + value);
//   return value;
// }

// const result = waitOneSecondThen(printResult);

// console.log("Starting");
// console.log("Return value is " + result);

//////////////////////////////////////////
/////ex///////
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

// function logAsynk() {
// console.log("hello callback"); // hello  finish  three two one
// setTimeout(function () {
//   console.log("one");
// }, 2000);
// setTimeout(function () {
//   console.log("two");
// }, 1000);
// setTimeout(function () {
//   console.log("three");
// }, 0);
// console.log("finish");

// logAsynk();
/////////////////////  Callback Hell  //////////////////////
function first(callback) {
  // callback();
}

function third(x) {
  console.log(x);
}

first(
  (function (cb) {
    cb(9);
  })(third)
);

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

// function getStudent(cb) {
//   setTimeout(function () {
//     console.log("getting Student....");
//     cb(function () {
//       console.log("render");
//     });
//   }, 2000);
// }
// function processStudent() {
//   setTimeout(function () {
//     console.log("process Student....");
//     renderHtml();
//   }, 1000);
// }
// getStudent(function (cb) {
//   console.log("process Student....");
//   cb();
// });
