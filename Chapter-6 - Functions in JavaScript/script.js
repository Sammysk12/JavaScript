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




let arr1 = [1,2,3,4,5]

// arr1.forEach(function printVal(val){ //value at each index
//         console.log(val)
// })


// let cityNames = ["Pune", "Solapur","Mumbai", "Kolhapur"]
// cityNames.forEach((pval) =>{
//     console.log(pval);
// })


//Some more array methods

//Map Method

let newArr = arr1.map((val) => {
    return val*val*val;
});

console.log(newArr)


//Filter method
// filter out array on a given condition

let evenArr = arr1.filter((val) => {    
    return val%2 ==0;
});


console.log(evenArr)


// Reduce method 
//returns a single value
//for e.g calculate sum

let sumofArray = arr1.reduce((res, val) =>{
    return res + val;
})

console.log(sumofArray)