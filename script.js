const photo = [].slice.call(document.querySelectorAll(".profile"));
const testimonial = [].slice.call(document.querySelectorAll(".quotecontainer"));
const nav = document.getElementById("nav");

//function that loops through each photo item and toggles the hidden class

function change(){
    for (i=0; i < photo.length; i++){
        console.log(photo)
        photo[i].classList.toggle("hidden");
        testimonial[i].classList.toggle("hidden");
    }
}

//calls the change function when the nav is clicked
nav.addEventListener("click", change);
