var x = 10; //create a glocal variable

function add() //function that adds the two variables
{
    var y = 15; //create a local variable
    document.write(x + y); //add the two variables and display result
}

add(); //call the function


function condition_States() //function to handle checking time
{
    if(new Date().getHours() < 18) //check if the current time is less than 18
    {
        document.getElementById("condition").innerHTML = "How are you today?"; //if it is print this message on the p element
    }

    if(Date().getHours > 18) //check if the curretn time is greater than 18
    {
        document.getElementById("condition").innerHTML = "How are you this evening?"; //if it is print this message on the p element
    }
}

function checkAge() //function that handles checking the age entered
{
    var age = document.getElementById("Age").value; //assign the value the user entered to a value
    var allowed; //create a variable for a string 

    if(age >= 18) //check if age is greater than or equal to 18
    {
        allowed = "You are allowed to purchase alchol" //if it is set allowed to this value
    }
    else
    {
        allowed = "You are not allowed to purchase alchol" //otherwise set allowed to this value
    }
    document.getElementById("Allowed").innerHTML = allowed; //display the message on the p element
}

function checkTime() //function that handle checking the current hour
{
    var time = new Date().getHours(); //get the current hour and assign it to a variable
    var reply; //create a variable that will hold a string 

    if(time < 12 && time > 0) //check if time is less than 12 ans greater than 0
    {
        reply = "It is morning time "; //if it is assign the reply varibale this message 
    }

    else if(time > 12 && time < 18) //check if time is greater than 12 and less than 18
    {
        reply = "It is the afternoon "; //if it is assign the reply varibale this message 
    }
    else
    {
        reply = "It is evening time " //otherwise assign the reply variable this message
    }

    document.getElementById("Time").innerHTML = reply; //Display the reply variable using the p element with the id Time
}