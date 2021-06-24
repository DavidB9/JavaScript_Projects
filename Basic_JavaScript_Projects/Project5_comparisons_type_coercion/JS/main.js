document.write("Test typeof value: ");
document.write("<br>");
document.writeln(typeof 5);

document.write("<br>");
document.write("Test boolean logic: ");
document.write("<br>");
document.writeln(20 > 5); //check of 20 is greater than 5 = true


console.log(10 + 10); //add 10 + 10 in the console
console.log(5 > 10); //check if 5 greater than 10 in the console 

function get_Infinity()
{
    x = 2E310; //floating point number for infinity
    y = -3E310; //floating point number for negative infinity
    document.getElementById("infin").innerHTML =   x + " " + y; //Display x  and y on the p element with the id infin
}

function coercion_Sample() //function that handles coercian
{
    document.getElementById("coercion").innerHTML = "10" + 5;
}

function test_Comparison() //function that handles comaparison
{
    document.getElementById("compare").innerHTML = 10 == 10; //Display the result on the p  element with the id compare
}

//variables to comapare same date type and number 
x = 10;
y = 10;

//variables to compare differnt data type and number
a = 4;
b = "5";

//variables to compare differnt date type but same value
c = 6;
d = "6";

//variables to compare same data type but different values
e = 20;
f = 10;

document.write("<br>"); //start a new line
document.write("Comparisons with triple equals: ");
document.write("<br>"); //start a new line
document.write(x === y); //write the result of the comparision between x and y = true
document.write("<br>");
document.write(a === b); //write the result of the comparision between a and b = false
document.write("<br>");
document.write(c === d); //write the result of the comparision between c and d = false
document.write("<br>");
document.write(e === f); //write the result of the comparision between e and f = false
document.write("<br>");

document.write("Logical Operators:");
document.write("<br>"); 
document.write(5 > 2 && 10 > 4); //write the result of 5 > 2 and 10 > 4 = true
document.write("<br>"); 
document.write(5 < 2 && 10 > 4); //write the result of 5 < 2 and 10 > 4 = false 
document.write("<br>"); 
document.write( 5 > 2 || 10 > 4); //writes the result of 5 > 2 or 10 > 4 = true
document.write("<br>"); 
document.write(5 < 2 || 10 < 4); //writes the result of 5 < 2 or 10 < 4 = false

document.write("<br>"); 
document.write("NOT operator:"); 
document.write("<br>"); 
document.write(!(10 > 5)); //write the result of ! 10 > 5 = false
document.write("<br>"); 
document.write(!(10 < 5)); //write the result of ! 10 < 5 = true