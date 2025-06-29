// function add_Two_Num(num1, num2){
//     console.log(num1+ num2)
// }
// const result = add_Two_Num(10,20);
// console.log(result); // This will log 'undefined' because the function does not return a value

function add_Two_Num(num1, num2){
    return num1 + num2; // Return the sum of num1 and num2
}
const result = add_Two_Num(10,20);
//console.log("Result:", result); // This will now log 30, the result of the addition

function calculateCartPrice(...items){ // here (...) is rest parameter Use the rest parameter to accept any number of arguments
    return items
}
// console.log(calculateCartPrice(200,300,400));

const user = {
    name: "John",
    age: 30,
    email: "some@gmail.com"
}
function getUserInfo(anyUser){
    // console.log(`User name is ${user.name} and age is ${user.age}`);
} 
getUserInfo(user);

// scope example
// In JavaScript, variables declared with 'let' and 'const' have block scope.

if(true){
    const username = "john";
    if(true){
        const website = "example.com";
        // console.log(`User ${username} is visiting ${website}`);
    }
    //console.log(website); // This will throw an error because 'website' is not defined in this scope
}
//console.log(username); // This will also throw an error because 'username' is not defined in this scope



// ++++++++++++++++++Intersesting Example++++++++++++++++++-------------------


// Function declarations and expressions
// Function declarations are hoisted, meaning they can be called before they are defined in the code


function addOne(num) {
    return num + 1;
}
addOne(5); // This will return 6

//console.log(addTwo(5)); // This will throw an error because 'addTwo' is not defined yet

const addTwo = function(num){
    return num +2;
}
//console.log(addTwo(5)); // This will return 7, but only after the function expression is defined

// Arrow functions
const user2 = {
    username: "john",
    age:20,
    getUserInfo: function(){
        //console.log(`User ${this.username} is ${this.age} years old.`); // 'this' refers to the user object or current context
        //console.log(this);
    }
}
user2.getUserInfo()
user2.username = "Ak";
user2.getUserInfo();
//console.log(this); // In the global context, 'this' refers to the global object (window in browsers)

// function globalFunction() {
//     console.log(this); // In a regular function, 'this' refers to the global object (window in browsers)
// }
// globalFunction();

// Arrow functions do not have their own 'this' context, they inherit 'this' from the parent scope

const regFun = function(){
    // console.log(this); // In a regular function, 'this' refers to the global object (window in browsers)
}


const arrowFun = () => {
    // console.log(this); // In an arrow function, 'this' refers to the parent scope, which is the global object in this case
}
//arrowFun();

//+++immediately invoked function expression (IIFE)+++
(function new_var(){
    // console.log("this is an IIFE");
})();

( ()=>{ // This is an arrow function IIFE
    // console.log("this is second IIFE");
}) ();


// ++++++++++++++Conditional Statements++++++++++++++++++

const userLoggedIn = true;
const debitCard= true;
const creditCard = false;

if(userLoggedIn && debitCard){
    // console.log("Allow to purchase");
}

if(userLoggedIn && (debitCard || creditCard)){
    // console.log("Allow to purchase");
}

// switch case example
const month = 3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
        

    default:
        console.log("Invalid month");
    break;
}

// falsy values
// In JavaScript, the following values are considered falsy:
// 1. false
// 2. 0 (zero)
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)
// 7. -0 (negative zero)
// 8. bigint 0n (zero as a BigInt)

//truthy values
// In JavaScript, the following values are considered truthy:
// 1. true
// 2. Any non-zero number (e.g., 1, -1, 3.14)
// 3. Any non-empty string (e.g., "hello", "0", "false", " ")
// 4. Any object (e.g., {}, [], function() {})  


