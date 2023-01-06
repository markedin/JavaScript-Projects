function countdown() { //this line defines a function called countdown
    var seconds = document.getElementById("seconds").value;     //this line defines a variable called seconds and the value is pulled from the HTML element with id "seconds"

    function tick() {       // this line defines a variable called tick
        seconds = seconds - 1;      //this line sets seconds = to seconds -1
        timer.innerHTML=seconds;    // this line updates the HTML element timer equal to the current value of seconds
        var time = setTimeout(tick, 1000);      // this line is used to create a time delay of a second, and store it in var time
        if (seconds == -1) {    // this line checks if seconds is == -1
            alert("Time's up!");        // if seconds == -1, an alert triggers saying times up
            clearTimeout(time);     // this line clears time var
            timer.innerHTML = "";// this line sets the html element timer to ""
        }
    }
    tick(); // this line starts the tick function again. it will continue to run until condition within the if statement is met
}

let slideIndex = 1; // this line defines a variable slideIndex and sets it equal to 1
showSlides(slideIndex);// this line runs function show slides with slideIndex as its input

function plusSlides(n) {        // this line defines a function called plusSlides with input n
    showSlides(slideIndex +=n);     // this line runs the function show slides with the input of the current slide index plus n (1)
}

function currentSlide(n) {      // this line defines a function called current slide
    showSlides(slideIndex = n);     // this line runs the showSlides function with a input of the current slideIndex = n
}

function showSlides(n) {        // this line defines a function callled showSlides with an input of n
    let i;      // this line defines i
    let slides =        // this line defines slides equal to the index of HTML elements with class name mySlides
    document.getElementsByClassName("mySlides");       //^^^^^^^^^^^^^^^^
    let dots = document.getElementsByClassName("dot");       //this line defines dots equal to the index of HTML elements with class name dot
    if (n > slides.length) {slideIndex = 1}     // this line is an if statement that checks if n is greater than the length of the slides index. if its true, set slideIndex = 1
    if (n < 1) {slideIndex = slides.length}     // this line is an if statement that checks if n is less than 1, if its true it sets slideIndex = to the length of the slide index
    for (i = 0; i < slides.length; i++) {       // this line is a for loop that starts with i = 0, and will continue to run as long as i < the length of the slides index
        slides[i].style.display = "none";       // this line will "hide" the slides where slides[i] is equal to 
    }
    for (i = 0; i < dots.length; i++) {     // this line is a for loop that starts with i = 0, and will run while i < the length of the dots index
        dots[i].className = dots[i].className.replace("active", "");        // this line will replace the current slide with whatever slide coresponding with a certain dot is clicked on 
    }
    slides[slideIndex-1].style.display = "block";       // this line will cause the browser to not display the slides[] HTML element equal to the slideIndex - 1
    dots[slideIndex -1].className += " active";     // this line will cause the browser to display the 
}

