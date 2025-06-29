let myArray = [1, 24, 25, 34,23,45];
// console.log(myArray[0]);
// console.log(myArray[4]);

// Array methods
myArray.push(99);
// console.log(myArray);
myArray.push(100);
// myArray.pop();
myArray.shift();
myArray.unshift();

// console.log(myArray);

// Slice and Splice++++++++++++++++++++++++++++++++++++++++++++++++++

let myArr2 = [1, 2, 3, 4, 5];
// console.log("A", myArr2);
// console.log(myArr2.slice(1, 3));
// console.log("B", myArr2);

// console.log(myArr2.splice(1, 3));
// console.log("C", myArr2);

//Array methods++++++++++++++++++++++++++++++++++++++

const dc_heroes = ["Batman", "Superman", "flash"]
const marvel_heroes = ["thor", "hulk", "ironman"]
// console.log(dc_heroes.concat(marvel_heroes));


// methods in JavaScript+++++++++++++++++++++++++++++

const mySymbol = Symbol("mySym");

const Js_user = {
    name: "Ankit",
    "full name": "Ankit Gupta",
    age: 20,
    [mySymbol]: "sym1",
    location: "delhi",
    skills: ["js", "react", "node"]

}
// console.log(Js_user.location);
// console.log(Js_user["location"]); // another way to access object properties
// console.log(Js_user[mySymbol]); // accessing symbol property
// console.log(Js_user);

Js_user.greeting = function(){
    console.log("Namaste " + this.name);
}


Js_user.greetingTwo = function(){
    console.log(`Your age is , ${this.age}`);
}
console.log(Js_user.greeting());
console.log(Js_user.greetingTwo());
