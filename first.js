// console.log("Hiii...this is Ak. I'm Learning JS.")
const accountId = 12345
let accountEmail = "ak@c.com"
var accountPassword = "2345" 
// Don't use var keyword in JS due to the issue in block scope{}
accountCity = "jaipur"
accountEmail = "sk@sk.com"
accountPassword = "5432"
accountCity = "delhi"
// console.table([accountId, accountEmail, accountPassword, accountCity]);
// let student = {
//     st_name:"Ankit",
//     class:"12th",
//     age:"20",
//     sec:"b"
// };
// console.log(student);
// console.log(typeof(student));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let x = "Ankit";
// let y = x;
// x ="gupta";
// console.log(x);
// console.log(y);


// let gameNum = 24
// let userNum = prompt("Guess the number:")
// while(userNum != gameNum){
//     if (userNum < gameNum){
//         console.log("Too High")
//     } else {
//         console.log("Too Low")
//     }
//     userNum = prompt(" Guess again:")
// }
// console.log("You guessed it right")
// console.log("Game Over")
// console.log("Thanks for playing")


// str = "Ankit"
// console.log(str.slice(1,5))



let marks = [45,24,58,78,68,67]
// console.log("marks:", marks)
for(let i=0; i<marks.length; i++){
    // console.log(marks[i])
}
let sum =0;
for(let i=0; i<marks.length; i++){
    sum += marks[i]
}
// console.log("Sum of all marks is: " + sum)
let avg = sum/marks.length
// console.log("Average of all marks is: " + avg)

let score = 25
// console.log(Math.sqrt(score)) // absolute value;

let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

//----------++++++++++++++++++++++++++++++++++++++++++++++++--------------

const insta_User = new Object() // singleton object
const instaUser = {}
// insta_user.name = "Ankit"
instaUser.id = "1234"
instaUser.name = "naitik"
instaUser.email = "nait@gmail.com"
// console.log(insta_User);
// console.log(instaUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ankit",
            Lastname: "Gupta"
        }
    },
    isLoggedIn: false
}
// console.log(regularUser.fullname.userfullname);

const user = Object.assign({}, regularUser,instaUser);
// console.log(user);

console.log(Object.keys(user)); // keys of the object
console.log(Object.values(user)); // values of the object

console.log(instaUser.hasOwnProperty("email")); // check if the object has the property
console.log(instaUser.hasOwnProperty("id")); // check if the object has the property

