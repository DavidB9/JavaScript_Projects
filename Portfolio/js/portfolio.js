//these functions  open and close the contact form
function openForm()
{
    document.getElementById("myForm").style.display = "block"
}

function closeForm()
{
    document.getElementById("myForm").style.display = "none"
}

//this function displays the first image in the slide show
var slideIndex = 1;
showSlides(slideIndex);

//this function changes the slide when the left or right arrow is pressed
function plusSlides(n)
{
    showSlides(slideIndex+=n);
}

//this function changes the when when the dot is clicked
function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot");  // This takes all elements with the class name "dot" and stores them in the variable array "dots"
    if(n > slides.length)  // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    {
        slideIndex = 1;
    }
    if(n < 1)  // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    {
        slideIndex = slideIndex.length;
    }
    for(var i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
    }
    for(var j = 0; j < dots.length; j++)
    {
        dots[j].className = dots[j].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }

    slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
    dots[slideIndex - 1].className+=" active"; // This adds the active styling to the dot associated with the image

}