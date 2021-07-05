function getReceipt()
{
    //This intializes our string so it can get passedfrom function to function
    //growing line by line into the full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for(var i =0; i < sizeArray.length; i++) //loop though rach time in the array
    {
        if(sizeArray[i].checked) //if the current item has been checked
        {
            var selectedSize = sizeArray[i].value; //store the value of the size the was selcted
            text1 = text1 + selectedSize + "<br>" //append the size onto your order string
        }
    }
    //if the selected size is equal to the following set the total size of the pizza
    if(selectedSize === "Personal Pizza")
    {
        sizeTotal = 6;
    }
    else if(selectedSize === "Small Pizza")
    {
        sizeTotal = 8;
    }

    else if(selectedSize ==="Medium Pizza")
    {
        sizeTotal = 10;
    }
    else if(selectedSize ==="Large Pizza")
    {
        sizeTotal = 14;
    }
    else if(selectedSize ==="Extra Large Pizza")
    {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal +".00");
    console.log("size text1:" +text1);
    console.log("subtotal: $"+runningTotal+".00");
    //These variables will get passed on to each function
    getTopping(runningTotal,text1);
}

function getTopping(runningTotal,text1)
{
    var toppingTotal = 0; //variable to store the total amount of toppings you have
    var selectedTopping = []; //array to store the toppings selected
    var toppingArray = document.getElementsByClassName("toppings"); //store all topping items in an array
    for(var j = 0; j < toppingArray.length; j++) //loop through the toppings array
    {
        if(toppingArray[j].checked) //if the item in the array has been selected
        {
            selectedTopping.push(toppingArray[j].value); //add the seleced topping to the selected array
            console.log("selected topping item: (" + toppingArray[j].value+")"); //display the value in console
            text1 = text1+toppingArray[j].value+"<br>"; //Append the topping to the order string
        }
    }

    var toppingCount = selectedTopping.length; //create a variable to store the amount of toppings selected

    if(toppingCount > 1) //if there is more than one topping 
    { 
        toppingTotal = toppingCount - 1; //decement one as the first is free
    }
    else
    {
        toppingTotal = 0;
    }
    runningTotal = runningTotal + toppingTotal;  //add the number of toppings to the size for the price
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount + "topping - 1 free topping = " +"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase total: "+"$" + runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal+".00"+"</strong></h3>";
}