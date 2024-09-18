// class Toyota {
//     constructor(){ //special method which helps to construct the object
//         console.log("Hello I am a constuctor")
//     }

//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }
// }


// let fortuner = new Toyota();
// let innova = new Toyota();


//Inheritance in JavaScript

// Passing down the properties and methods from parent to child class
//using 'extends' keyword we can inherit

class Parent{
    paisa(){
        console.log("I have money")
    }
}

class Child extends Parent{

}

let sam = new Child();

console.log(sam);




//Error handling
//Sometimes we get error in code JavaScript thats why we have this concept called error handling 
// we can actually put the code in side the try catch block we avoid the stoppage in the code

let a = 5 ;
let b = 4 ;

console.log(a+b);
console.log(a+b);

try{
    console.log(a+c);

}catch(err){
console.log(err)
}
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);