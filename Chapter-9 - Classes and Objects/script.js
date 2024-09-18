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

console.log(sam)