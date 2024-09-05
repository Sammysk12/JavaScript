//Loops in JavaScript
console.log("Hello");


for(i=0; i<=4; i++){
    console.log("Hello");
}

let sum = 0;

for(i=1; i<=5; i++){
    sum+=i;
}

console.log("Sum = "+sum)



//for of loop
let StrVar = "Apna College"

for(let val of StrVar){
    console.log(val);
  }


//for of loop

let employee = {
    empName : "SammySk",
    age : 22,
    profession : "Full-Stack Developer",
    salary : "30000"
}

for(val in employee){
    console.log("key = "+ val +" value = "+employee[val]);
}