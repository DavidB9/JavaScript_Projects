function addition() //function to handle addition
{
    var addition = 2 + 2; //add two numbers together and store the result
    document.getElementById("Add").innerHTML = "2 + 2 = " + addition; //Display result on p element with id Add
}

function subtraction() //function to handle subtraction
{
    var substraction = 10 - 5; //subtract two numbers and store in a variable
    document.getElementById("Sub").innerHTML = "10 - 5 = " + substraction; //Display result on p element with id Sub
}

function multiplication() //function to handle multiplication
{
    var mul = 10 * 6; //multiply 10 by 6 and store the result in a variable
    document.getElementById("Mul").innerHTML = "10 * 6 = " + mul; ////Display result on p element with id Mul
}

function division() //function to handle division
{
    var div = 50/5; //divide 50 by 5 and store the result in a variable
    document.getElementById("Div").innerHTML = "50 / 5 = " + div; //Display result on p element with id Div
}

function more_Math() //function that handles using multiple math operators
{
    var testMath = (5 + 5) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "(5 + 5) * 10 / 2 - 5 = " + testMath; //Display result on p element with id Math
}

function modulus() //function to handle modulus operator
{
    var mod = 25 % 4; //divide 25 by 4 and store the remainder
    document.getElementById("Mod").innerHTML = "25 / 4 leaves a remainder of: " + mod; //Display the remainder on the p element with the id Mod
}

function negation() //function that handles turning a number to a negative
{
    var x = 20; //create a variable and store the value 20
    document.getElementById("Neg").innerHTML = "x is now: " + -x; //Negate x by placing a - in front and display the result on the p element with the id Neg
}

function increment() //function that handles incrementing a number
{
    var x = 20; //create a variable and store the value 20
    x++; //increment the number(adding 1 to it)
    document.getElementById("Incre").innerHTML = "Incrementing x gives: " + x; //Display the result on the p element with the id Incre
}

function decrement() //function that hanfles decrementing a number
{
    var x = 20; //create a variable and store the value 20
    x--; //decrement the number(subtracting 1 from it)
    document.getElementById("Decre").innerHTML = "Decrementing x gives: " + x; //Display result on p element with id Decre
}

var rand = (Math.random()* 100); //get a random number between 0 and 100
rand = Math.round(rand); //round the number to the nearest integer
window.alert(rand); //Display random number on alert message as the page loads