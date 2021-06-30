function whileLoop() //function to handle testing while loops
{
    var digit = ""; //create string variable
    var x = 1; //create a variable and store 1
    while(x < 11) //while x is less than 11 continue to do this
    {
        digit += "<br>" + x; //add a new line and what x is currently to the string
        x++; //increment x by 1
    }
    document.getElementById("loop").innerHTML = digit; //display the result on the p element
}


var people = ["David","Alan","Pauline","Amanda","Leanne","Michael"]; //create an array and store some values
var content = ""; //create a empty string variable
var i;

function forLoop() //function to handle testing for loops
{
    for(i = 0; i < people.length; i++) //sets i to 0 and loops through based on the length of the array incrementing i each time
    {
        content += people[i] + "<br>"; //add what current item on the arry you are on to content and add a new line
    }

    document.getElementById("forTest").innerHTML = content; //display the result on the p element
}

function pics() //function that handles testing arrays
{
    var pictures = []; //create a empty array
    pictures[0] = "house"; //set first value
    pictures[1] = "city"; //set second value
    pictures[2] = "river"; //set third value
    document.getElementById("Array").innerHTML = "In this picture there is a " + pictures[0] + "."; //display the value first value in the array
}

function testConstant() //function that handles testing constants
{
    const instrument = {type: "guitar" ,brand:"Fender",color:"black"};  //create a const object and assign it values
    instrument.color = "blue"; //change the color property to blue
    instrument.price = "$500"; //add the price property and assign it $500
    document.getElementById("const").innerHTML = "The cost of the " + instrument.color + " " + instrument.type + " is " + instrument.price;  //Display the instrument color its type and price on the p element tag 
}


document.writeln("Testing Let:")
var x = 89; //create a variable and assign it a value
document.write("<br>"+x); //write the value to the document
{
    let x = 35; //use let to assign x a differnt value within the{}
    document.writeln("<br>" + x); //write the value to the document
}
document.writeln("<br>" + x); //write the value to the document again to see it isn't the same as the let value

let car =  {  //create an object
    //create properties and assign them values
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "black ",
    description : function() //method to show object properties
    {
        return "This car is a " + this.year + this.color + this.make + this.model;
    }
};

document.getElementById("letObj").innerHTML = car.description(); //display the result on a p element