//toggling = changing between the 1st state and 2nd state

modeBtn = document.querySelector("#btn1");

modeBtn.addEventListener("click", () =>{
    if(document.querySelector("body").style.backgroundColor = "#fff"){
        document.querySelector("body").style.backgroundColor = "#1c1c1c";
    }else{
        document.querySelector("body").style.backgroundColor = "#fff";
    }
    

})
