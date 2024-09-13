//Q1
//Hello JavaScript 
//add  "from apna college"


let change = document.querySelector("h2");

console.dir(change.innerText);

change.innerText = change.innerText + " from apna college";




// Q2
// Add 3 divs and change its value by selection proper value
let div = document.querySelectorAll(".box");
console.dir(div);

div[0].innerText= "New unique val 1";
div[1].innerText= "New unique val 2";
div[2].innerText= "New unique val 3";


let i = 1
for(let val of div){
    val.innerText = `New val ${i}`;
    i++;
}

//Q3
//Add button in div at start without touchinh HTMl and give bg color red and txt color white
let btn1 = document.createElement("button");
btn1.innerText = "Click me!"
btn1.style.backgroundColor = "red"
btn1.style.color = "white";

document.querySelector("body").prepend(btn1);


// Q2
// Add a para and change styling by changing its class name
let para = document.querySelector(".fir");
// para.setAttribute("class", "sec");
para.classList.add("sec")



