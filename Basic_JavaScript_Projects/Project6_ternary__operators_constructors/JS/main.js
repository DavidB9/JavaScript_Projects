function Ride_Function() //function that handles if tall enough
{
    var height, can_Ride; //create two variables for the height and the bool
    height = document.getElementById("Height").value; //set the height value to what the user entered
    can_Ride = (height < 52) ? "You are too short" : "You are tall enough"; //check if height entered is less than 52 if true assign the left value if false assign the right value
    document.getElementById("Ride").innerHTML = can_Ride + " to ride"; //Display the result on the p element with the id Ride
}

function Vehicle(Make,Model,Year,Color) //create a class that takes the values make,model,year and color
{
    this.Vehicle_Make = Make; //assign the vehicle make the given make value
    this.Vehicle_Model = Model; //assign the vehicle model the given model value
    this.Vehicle_Year = Year; //assign the vehicle year the given year value
    this.Vehicle_Color = Color; //assign the vehicle color the given color value
}

//create three instances of the vehicle class with arguments
var Jack = new Vehicle("Dodge","Viper",2020,"Red");
var Emily = new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard");

function myFunction() //function that handles what is displayed for the button press
{
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color +
     "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


function count_Function() //function that handles the displying number
{
    document.getElementById("Nested_Function").innerHTML = Count(); //display the counted value from calling the count function
    function Count() //function that handles the counting
    {
        var startingPoint = 9; //create a starting variable and assign it a value
        function plusOne() //function that handles incrementing the number
        {
            startingPoint+=1;
        }
        plusOne(); //calls the increment function
        return startingPoint; //returns the starting point variable to be displayed
    }
}