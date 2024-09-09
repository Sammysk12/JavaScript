// console.log("Hello !")

// "abc".toUpperCase();
//           //^    ^
//          // |    |
//          // |    Method to call the funtions.
//          //Function 
// [1,2,3].push(4);



// function myFunction(Obj){
//     console.log("Hello,  My name is Sammy !");
//     for(val in Obj){
//         console.log(`${val} : ${Obj.val}`)
//     }

// }



// let myDetails ={
//     name: "Sammy",
//     age: "22",
//     nickName: "GymRat SK"
// }



// myFunction(myDetails);


// function sum(x, y){
// parameters are local variable scope and cannot be accessed outside this block
//     console.log(x+y);

// }


// sum(4,4);



//function can take parameters and can return value

function sum(x, y){
// parameters are local variable scope and cannot be accessed outside this block
  let sum= x+y;
  return sum;
}


let total = sum(3,4)

console.log(total)




//Arrow functions
//Arrow funtions are introduced in Modern Javascript to simplify the funtions concept
//Anonymus function can be also written
const function2= (word) =>{
    console.log(word)
}


function2("Sammy");