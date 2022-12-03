var css = document.querySelector ("h3");
var color1 = document.querySelector(".color1"); //Salects the color for the 1st gr
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";   

    css.textContent = body.style.background + ";";
}

//input the color that we pick at the color 1 and makes it to the BG.
color1.addEventListener("input", setGradient);

//input the color that we pick at the color 2 and makes it to the BG.
color2.addEventListener("input", setGradient);