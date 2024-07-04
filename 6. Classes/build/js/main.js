"use strict";
class Coder {
    constructor(name, music, age, lang = "JavaScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.name} and I am ${this.age} years old.`;
    }
}
const Priyanshu = new Coder("Priyanshu", "Rock", 21);
// console.log(Priyanshu.getAge());
// console.log(Priyanshu.age) // Error: Property 'age' is private and only accessible within class 'Coder'.
// console.log(Priyanshu.lang); // Error: Property 'lang' is protected and only accessible within class 'Coder' and its subclasses.
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `Hello, I am ${this.name} and I code in ${this.lang}.`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Pop", 22);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy Page", "Guitar");
// console.log(Page.play("strums"));
/////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
// console.log(John.id)
// console.log(Steve.id)
// console.log(Amy.id)
// console.log(Peeps.count)
/////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((item) => typeof item === "string")) {
            // return this.dataState = value // Error: Setters can't return a value
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param isn't an array of strings");
    }
}
const Mybands = new Bands();
Mybands.data = ["Led Zeppelin", "The Beatles", "The Rolling Stones"];
console.log(Mybands.data);
Mybands.data = [...Mybands.data, "Pink Floyd"];
console.log(Mybands.data);
// Mybands.data = 'Van Halen' // Error: Type 'string' is not assignable to type 'string[]'.
// Mybands.data = ['Van Halen', 6] // Error: Type 'number' is not assignable to type 'string'.
