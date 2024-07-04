// type aliases
type strOrnum = string | number;
type strOrnumArr = strOrnum[];

interface Guitarist {
  name: string;
  active: boolean;
  albums: strOrnumArr;
}

type userId = strOrnum;

// literal types
let myName: "John";
// myName = 'abc' // Type '"abc"' is not assignable to type '"John"'.
let userName: "Helen" | "John" | "Mike";
userName = "Helen"; // OK
// userName = 'abc' // Type '"abc"' is not assignable to type '"Helen" | "John" | "Mike"'.

// functions
// const add = (a, b): number => a + b; // Parameter 'a' implicitly has an 'any' type.
const add = (a: number, b: number): number => a + b;

const logMsg = (msg: any): void => console.log(msg);
logMsg("Hello World!");
// console.log(add(1, '2')) // Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(add(1, 2));

let subtract = function (c: number, d: number): number {
  return c - d;
};

// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = (a, b) => a * b;
// logMsg(multiply(2, 3));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};

// default parameters
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg("addAll(3, 2, 2): " + addAll(3, 2, 2));
logMsg("addAll(3, 2): " + addAll(3, 2));
logMsg("sumAll(3, 2): " + sumAll(3, 2));
logMsg("sumAll(undefined, 3, undefined): " + sumAll(undefined, 2, undefined));

// rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg("total(1, 2, 3): " + total(1, 2, 3));

// return type is never because the function never returns
const createError = (msg: string): never => {
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
const isNumber = (value: any): boolean => {
  return typeof value === "number"
}

const isString = (value: any): boolean => {
  return typeof value === "string"
}

const numOrStr = (value: strOrnum): string => {
  if (isNumber(value)) return "Number: " + value;
  if (isString(value)) return "String: " + value;
  return createError("Invalid type");
};

logMsg(numOrStr("Hello"));