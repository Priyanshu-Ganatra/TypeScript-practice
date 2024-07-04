// index signatures are used to define the type of the key and the value of an object. 
// the reason why we use index signatures is that we can't always know the keys of an object. 
// index signatures can be used in interfaces and types.

// interface TransactionObj {
// 	// [index: boolean]: number; // An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.
// 	readonly [index: string]: number; 
// }

// interface TransactionObj {
//   Pizza: number;
//   books: number;
//   Job: number;
// }

interface TransactionObj {
	readonly [index: string]: number; 
  Pizza: number;
  books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  books: -5,
  Job: 50,
};

let prop: string = "Pizza";	
// console.log(todaysTransactions[prop]); // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'. (when index signature is not used)

const todaysNet = (transactions: TransactionObj): number => {
  let net = 0;
  for (let transaction in transactions) {
    // net += transactions[transaction]; // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'. (when index signature is not used)
	net += transactions[transaction];
  }
  return net;
};

console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 10; // Index signature in type 'TransactionObj' only permits reading.

// problem with index signatures is that it allows any key to be used to access the object.
console.log(todaysTransactions.ABCD) // undefined
////////////////////////////////////////////////////////

// interface Student{
//   [key: string]: string | number | number[] | undefined
//   name: string
//   age: number
//   classes?: number[]
// }

// const student : Student = {
//   name: 'John',
//   age: 20,
//   classes: [1,2,3]
// }

// // console.log(student.test)

// for(const key in student){
//   // without index signature, we can't access the object properties using the key
//   console.log(`${key} : ${student[key]}`)
// }

// to access the object properties using the key dynamically, we can use keyOf assertions
interface Student2{
  name: string
  age: number
  classes?: number[]
}

const student2 : Student2 = {
  name: 'Jake',
  age: 22,
  classes: [3,324,212424]
}

for(const key in student2){
  console.log(`${key} : ${student2[key as keyof Student2]}`)
}

// same as above
// Object.keys(student2).forEach(key => {
//   console.log(`${key} : ${student2[key as keyof typeof student2]}`)
// })  

const logStudentKey = (student2: Student2, key: keyof Student2) => {
  console.log(`${key} : ${student2[key]}`)
}

logStudentKey(student2, 'age')
////////////////////////////////////////////////////////

// interface Incomes{
//   [key: string] : number
// }

type Keys = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Keys, number>

const monthlyIncomes: Incomes = {
  salary: 1000,
  bonus: 500,
  sidehustle: 200
}

for (const key in monthlyIncomes){
  console.log(`${key} : ${monthlyIncomes[key as keyof Incomes]}`)
}