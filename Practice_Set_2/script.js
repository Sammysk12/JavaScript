// alert("Hello"); //One time popup


// let uname = prompt("Hello"); 
// console.log(uname);


//  let num = prompt("Enter a Number: ")

//  if(num%5===0){
//     console.log("The number is divisible by 5")
//     alert("The number is divisible by 5")
// } else{
//     console.log("The number is not divisible by 5")
//     alert("The number is not divisible by 5")
    
//  }


let score = prompt("Enter your score : ");

if(score>=90 && score<=100){
    alert("A");
    console.log("A");
}

else if(score>=70 && score<=89){
    alert("B");
    console.log("B");
}

else if(score>=60 && score<=69){
    alert("C");
    console.log("C");
}

else if(score>=50 && score<=59){
    alert("D");
    console.log("D");
}

else if(score>=0 && score<=49){
    alert("F");
    console.log("F");
}
else{
    alert("Invalid score Entered");
    console.log("Invalid score Entered");
}
