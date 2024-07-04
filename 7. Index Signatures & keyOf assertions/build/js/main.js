"use strict";
// index signatures are used to define the type of the key and the value of an object. 
// the reason why we use index signatures is that we can't always know the keys of an object. 
// index signatures can be used in interfaces and types.
const todaysTransactions = {
    Pizza: -10,
    books: -5,
    Job: 50,
};
let prop = "Pizza";
// console.log(todaysTransactions[prop]); // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'. (when index signature is not used)
const todaysNet = (transactions) => {
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
console.log(todaysTransactions.ABCD); // undefined
const student2 = {
    name: 'Jake',
    age: 22,
    classes: [3, 324, 212424]
};
for (const key in student2) {
    console.log(`${key} : ${student2[key]}`);
}
// same as above
// Object.keys(student2).forEach(key => {
//   console.log(`${key} : ${student2[key as keyof typeof student2]}`)
// })  
const logStudentKey = (student2, key) => {
    console.log(`${key} : ${student2[key]}`);
};
logStudentKey(student2, 'age');
const monthlyIncomes = {
    salary: 1000,
    bonus: 500,
    sidehustle: 200
};
for (const key in monthlyIncomes) {
    console.log(`${key} : ${monthlyIncomes[key]}`);
}
