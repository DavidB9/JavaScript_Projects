function countdown() //function that handles counting down
{
    var seconds = document.getElementById("secs").value; //store the seconds entered by the user into a variable

    function tick() //function that handles decrementing seconds
    {
        seconds = seconds - 1; //decrement seonds by 1
        document.getElementById("timer").innerHTML =seconds; //diplay the result in the p element 
        setTimeout(tick,1000); //program is paused for one second

        if(seconds == -1) //if there are no seconds left
        {
            alert("Time is up!"); //disply an alert message 
        }
    }

    tick(); //call the decrementing function
}


//Slide show//


var slideIndex = 1; //variable theat holds the current index 
showSlides(slideIndex); //call the showSlide function and give it the index as the argument 

currentSlide(0);

function plusSlides(n) //function that handles moving to the next image with the arrow
{
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n)  //function that handles what image is currently displayed
{ 
  var slides = document.getElementsByClassName("mySlides"); //create a variable to hold all instances of mySlides
  var dots = document.getElementsByClassName("dot"); //create a variable to hold all instances of dot
  slides[0].style.display = "block";

  if (n > slides.length)  //if moving forward past the last image
  {
      slideIndex = 1 //set the image aas the first image
  }
  if (n < 1)  //if moving backwards past the first image
  {
      slideIndex = slides.length //set the image aas the third image
  }
  for (i = 0; i < slides.length; i++) //loops through the slides and sets all images to not appear
  {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) //loop therough the dots and set the current one to active
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block"; //display the current slide image
  dots[slideIndex-1].className += " active"; //set the current dot to active

}