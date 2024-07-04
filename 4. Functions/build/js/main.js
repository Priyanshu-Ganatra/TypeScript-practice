"use strict";
// literal types
let myName;
// myName = 'abc' // Type '"abc"' is not assignable to type '"John"'.
let userName;
userName = "Helen"; // OK
// userName = 'abc' // Type '"abc"' is not assignable to type '"Helen" | "John" | "Mike"'.
// functions
// const add = (a, b): number => a + b; // Parameter 'a' implicitly has an 'any' type.
const add = (a, b) => a + b;
const logMsg = (msg) => console.log(msg);
logMsg("Hello World!");
// console.log(add(1, '2')) // Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(add(1, 2));
let subtract = function (c, d) {
    return c - d;
};
let multiply = (a, b) => a * b;
// logMsg(multiply(2, 3));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
// default parameters
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg("addAll(3, 2, 2): " + addAll(3, 2, 2));
logMsg("addAll(3, 2): " + addAll(3, 2));
logMsg("sumAll(3, 2): " + sumAll(3, 2));
logMsg("sumAll(undefined, 3, undefined): " + sumAll(undefined, 2, undefined));
// rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg("total(1, 2, 3): " + total(1, 2, 3));
// return type is never because the function never returns
const createError = (msg) => {
    throw new Error(msg);
};
// return type is never because the function never returns
const infiniteLoop = () => {
    let i = 0;
    while (true) {
        i++;
        // if (i === 100) break;
    }
};
// custom type guards
const isNumber = (value) => {
    return typeof value === "number";
};
const isString = (value) => {
    return typeof value === "string";
};
const numOrStr = (value) => {
    if (isNumber(value))
        return "Number: " + value;
    if (isString(value))
        return "String: " + value;
    return createError("Invalid type");
};
logMsg(numOrStr("Hello"));
