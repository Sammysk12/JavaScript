// function handleSubmit(){
//     alert("Hi!")
// }


// //get element by ID
// let heading = document.getElementById("heading");
// // console.log(heading);
// // console.dir(heading);

// //get element by className
// let subHeading = document.getElementsByClassName("sub-heading");

// console.log(subHeading);
// console.dir(subHeading);


// //get elements by tag --> HTML tag

// let para = document.getElementsByTagName("p");

// console.dir(para);


// //Another powerful way for DOM manipulation is
// //Query Selector
// //It detects the which tpye of element is given id/className/tag

// //returns first element which it founds in HTML
// let p = document.querySelector("p");
// console.dir(p);

// //Returns all elements value which it found in the HTML
// // let head = document.querySelectorAll(".sub-heading");

// // console.dir(head);

// let head1 = document.querySelectorAll(".first");

// console.dir(head1);


// let div = document.querySelector("div");
// console.log("div");



//Accessing attributes and changing its values
let ul = document.querySelector("ul");

let ul1 = ul.getAttribute("ul");
console.log(ul1)

console.log(ul.setAttribute("class", "fruits"));

let div = document.querySelector("div");
// console.log("div");


div.style.backgroundColor ="red";


let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);

//adds at the end
div.append(newBtn);

//adds at the start
div.prepend(newBtn);

//adds before the node (outside)
div.before(newBtn);

//adds after the node (outside)
div.after(newBtn);


let heading1 = document.createElement("h1");
heading1.innerText = "Hi! ";

div.append(heading1)
