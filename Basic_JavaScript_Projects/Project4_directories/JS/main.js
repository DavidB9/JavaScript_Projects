function my_Directory() //function that handles the directory
{
    var people = {Name : "David", Age : "26", location : "Offaly"}; //create a directory with key-value pairs
    delete people.Age; //delete the Age key-value from the directory 
    document.getElementById("Directory").innerHTML = people.Age; //display the key-value age in a p element with the id Directory
}