const john = document.getElementById("john");
const tanya = document.getElementById("tanya");
const nav = document.querySelectorAll(".nav");

//adds and removes the hidden class to show the one not currently displayed
function change(){
    tanya.classList.toggle("hidden");
    john.classList.toggle("hidden");
}

//To tie buttons position relative to the images they had to be child elements of the images
//so each image has it's own set of buttons, nav here represents a node list of all the buttons
//here we loop through each set of navigation buttons and apply a click event listener
nav.forEach(
    function(){
        this.addEventListener("click", change)
    });
