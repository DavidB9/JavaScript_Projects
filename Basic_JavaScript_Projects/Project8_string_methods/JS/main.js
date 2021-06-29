function fullSentence() //function to handle concat test
{
    var first = "I have made"; //create three variables strings with parts of the message 
    var second = " this test";
    var third = " using the concat method";
    var sentence = first.concat(second,third); //concat the second and third onto the first string
    document.getElementById("conca").innerHTML = sentence; //display the result using the p element with the id conca
}

function slice() //function to handle slice method test
{
    var sentece = "All word and no play make David a dull boy" //create a variable and store a string
    var section = sentece.slice(26,32); //create variable to hold sliced string and use slice to select the start and end point of what you are taking
    document.getElementById("testSlice").innerHTML = section; ////display the result using the p element with the id testSlice
}

function precisionTest() //function to handle toPrecision test
{
    var test = 112423.32432432434; //create a variable and store a big number
    document.getElementById("testPrecision").innerHTML = test.toPrecision(10); //display the variable to the precision of ten places on the p element with the id testPrecision
}

x = 50; //create a variable and store a number
document.writeln(x.toString()); //write the variable to doc while changing it to a string