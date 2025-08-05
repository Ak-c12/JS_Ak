let myArray = new Array(5)
// for(i=0; i<myArray.length; i++){
//     myArray[i] = Number(prompt("Enter a number:"));
// }
// console.log(myArray);

let sum =0;
for(i=0; i<myArray.length; i++){
    myArray[i] = Number(prompt("Enter a number:"));
    sum = sum + myArray[i];

}
console.log("Sum of the array is: " + sum);
