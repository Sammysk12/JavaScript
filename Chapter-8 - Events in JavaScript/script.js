btn1 = document.querySelector("button");

btn1.onclick = () =>{
    // alert("Button was clicked!");
    console.log("Button was clicked!");
}

btn1.addEventListner("onclick", () =>{
    console.log("Hello")
});



let box = document.querySelector(".div");

box.onmouseover = () =>{
    
    console.log("Error");
}

