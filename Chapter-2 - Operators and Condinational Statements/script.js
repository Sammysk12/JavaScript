// This is how comments are written
//This is a comment

// console.log("Hello World")

// **************************************************

//This is used for single line comment

/* This is used for multiline 
        comments */


//Operators 
//Arthematic Operators
/*

+ , - , * , / , %



a + b
^ ^ ^
| | |
  | Operand
  Operator

  */

let a = 5;
let b =2;

// console.log("a+b = ", a+b)
// console.log("a-b = ", a-b)
// console.log("a*b = ", a*b)
// console.log("a/b = ", a/b)
// console.log("a%b = ", a%b)
// console.log("a**b = ", a**b)


//Uniary Operator



console.log("a = "+ a++)

console.log("a = "+ a--)


console.log("a = "+ ++a)

console.log("a = "+ --a)


//Assignment Operators

/* =, +=, -=, *=, /=, **=

a+=4; //a = a + 4;
a-=4; //a = a - 4;
a*=4; //a = a * 4;
a/=4; //a = a / 4;
*/

//Comparision Operator

/*
Equal to -> ==
Equal & type -> ===
Not equal to -> !=
Not equal to & type -> !===

Greater than ->    >
Greater than equal to ->  >= 
Less than ->   <
Less than equal to ->   <=


Comparision Operator returns boolean values
*/

// console.log(a==b)   If string value contains only number then it compared to int it returns true 
// console.log(a===b)  For that strictly check is used  
// console.log(a!=b)
// console.log(a!==b)


//Logical Operators
// Logical Operator returns boolean values

/* Logical


Logical and -> && -----> Both conditions should be true

Logical OR -> ||  ------> One of them should be true
   
Logical NOT ->    ------>  When its true it returns false


*/


//Condintional Statements

let age =6; 

if(age>=18){  //If Condition get's true this block gets executed
    console.log("You're Eligible");
}
else{ //Otherwise this block get's executed
    console.log("You're Not Eligible");
}


let num = 3;

if(num%2===0){
    console.log("Even")
}
else{
    console.log("Odd")

}





if(num>10){
    console.log("Big")
}
else if(num>20){
    console.log("Bigger")

}
else if(num>30){
    console.log("Biggest")
}
else{
    console.log("Smaller")
}


//Ternary Opertor

let res = age > 18 ? "Adult" : "Not Adult";

console.log(res)


//Switch statements


const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
