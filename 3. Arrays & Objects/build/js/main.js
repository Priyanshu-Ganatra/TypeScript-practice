"use strict";
// Arrays
{
    console.log("arrays: ");
    let strings = ["Hello", "World", "from", "TypeScript"];
    let guitars = ["abc", "aad", 121];
    let mixed = [1, "2", true, 3, 4, 5];
    // strings[0] = 131 // Error: Type 'number' is not assignable to type 'string'
    // strings.push(2); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
    guitars[0] = 1984;
    // guitars.unshift(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'
    mixed[0] = "1";
    mixed.push(false);
    // mixed.unshift(/23/); // Argument of type 'RegExp' is not assignable to parameter of type 'string'
    mixed.unshift(3);
    // guitars = mixed // Type '(string | number | boolean)[]' is not assignable to type '(string | number)[]'. Type 'string | number | boolean' is not assignable to type 'string | number'. Type 'boolean' is not assignable to type 'string | number'.
    let test = [];
    let demo = [];
    demo.push("1");
    // tuple
    let myTuple = ["Hello", 1, true];
    let mix = ["Hello", 1, true];
    // mix[100000] = 23 // allowed
    // mix = myTuple; // allowed
    // myTuple = mix; // Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'. Target requires 3 element(s) but source may have fewer.
    // myTuple[500] = "World"; // Type '"World"' is not assignable to type 'undefined'.
    // myTuple[1] = "World"; // Type 'string' is not assignable to type 'number'.
    // myTuple[2] = "World"; // Type 'string' is not assignable to type 'boolean'.
    console.log("Tuple", myTuple);
}
// Objects
{
    console.log("objects: ");
    let myObj;
    myObj = [];
    const exampleObj = {
        name: "John",
        age: 30,
        isStudent: false,
    };
    // exampleObj.name = 12 // Type 'number' is not assignable to type 'string'.
    exampleObj.name = "Doe";
    let evh = {
        name: "Eddie Van Halen",
        active: true,
        albums: [1984, 3113, "Van Halen"],
    };
    let jp = {
        name: "John Petrucci",
        active: true,
        albums: ["Images and Words", "Metropolis Pt. 2", "Train of Thought"],
    };
    let guitarist3 = {
        name: "Steve Vai",
        albums: [1990, 1991],
    };
    let guitarist4 = {
        active: true,
        albums: [1990, 1991],
    };
    console.log(evh);
    console.log(guitarist4);
    // problem with optional properties
    // const greetGuitarist = (guitarist: Guitarist2) => {
    //     console.log(`Hello ${guitarist.name.toUpperCase()}`) // 'guitarist.name' is possibly 'undefined'
    // }
    // greetGuitarist(evh)
    // fix
    const greetGuitarist = (guitarist) => {
        // fix 1
        // console.log(`Hello ${guitarist.name?.toUpperCase()}`)
        // fix 2
        if (guitarist.name) {
            console.log(`Hello ${guitarist.name.toUpperCase()}`);
            return;
        }
        console.log(`Hello there`);
    };
    greetGuitarist(guitarist4);
}
// Enums
{
    console.log("enums: ");
    let Grade;
    (function (Grade) {
        Grade[Grade["U"] = 1] = "U";
        Grade[Grade["D"] = 2] = "D";
        Grade[Grade["C"] = 3] = "C";
        Grade[Grade["B"] = 4] = "B";
        Grade[Grade["A"] = 5] = "A";
    })(Grade || (Grade = {}));
    console.log(Grade.U); // 1
    console.log(Grade.A); // 5
}
