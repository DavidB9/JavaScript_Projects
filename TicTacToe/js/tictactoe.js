//this variable keeps track of who's turn it is
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square
function placeXOrO(squareNumber)
{
    //This condition ensures a square hasn't be selected already
    //The .some() method is used to check each element of selectedSquare array to
    //see if it contains the square number clicked on
    if(!selectedSquares.some(element => element.includes(squareNumber)))
    {
        //This variable retrieves the html element if that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is
        if(activePlayer === 'X')
        {
            //if activePlayer is equal to X the x.png is placed in html
            select.style.backgroundImage = 'url("images/x.png")';
        }
        //Active player may only be X or O so if not X it is O
        else
        {
            //if activePlayer is equal to O the o.png is placed
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions
        checkWinConditions();
        //This condition is for changing the active player
        if(activePlayer === 'X')
        {
            //if X change to O
            activePlayer = 'O'
        }
        //if active player is anything other than X
        else
        {
            activePlayer = 'X';
        }

        //This function pays placement sound
        audio('./media/place.wav');
        //This condition checks to see if it the computers turn
        if(activePlayer === 'O')
        {
            //This function disables clicking for computer choice
            disableClick();
            //This function waits 1 second before placing the image and enabling click
            setTimeout(function () {computersTurn();}, 1000);
        }
        //Returning true us needed for our computerTurn function
        return true;
    }

    //This function results in a random square being selected
    function computersTurn()
    {
        //this boolean is needed for our while loop
        let success = false;
        //This variable stores a random number 0-8
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already
        while(!success)
        {
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluates returns true, the square hasn't been selected yet
            if(placeXOrO(pickASquare))
            {
                //This line calls the function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}


//This function parses the selectedSquare array to search got win conditions
//drawWindLine function is callled to draw line if conditions is met
function checkWinConditions()
{
    //X 0, 1, 2, condition
    if(arrayIncludes('0X','1X','2X'))
    {
        drawWinLine(50,100,558,100);
    }
    //X 3, 4, 5 condition
    else if(arrayIncludes('3X','4X','5X'))
    {
        drawWinLine(50,304,558,304);
    }
    //X 6, 7, 8 condition
    else if(arrayIncludes('6X','7X','8X'))
    {
        drawWinLine(50,508,558,508);
    }
    //X 0, 3, 6 condition
    else if(arrayIncludes('0X','3X','6X'))
    {
        drawWinLine(100,50,100,558);
    }
    //X 1, 4, 7 condition
    else if(arrayIncludes('1X','4X','7X'))
    {
        drawWinLine(304,50,304,558);
    }
    //X 2, 5, 8 condition
    else if(arrayIncludes('2X','5X','8X'))
    {
        drawWinLine(508,50,508,558);
    }
    //X 6, 4, 2 condition
    else if(arrayIncludes('6X','4X','2X'))
    {
        drawWinLine(100,508,510,90);
    }
    //X 0, 4, 8 condition
    else if(arrayIncludes('0X','4X','8X'))
    {
        drawWinLine(100,100,520,520);
    }
    //The O conditions

    //O 0, 1, 2, condition
    if(arrayIncludes('0O','1O','2O'))
    {
        drawWinLine(50,100,558,100);
    }
    //O 3, 4, 5 condition
    else if(arrayIncludes('3O','4O','5O'))
    {
        drawWinLine(50,304,558,304);
    }
    //O 6, 7, 8 condition
    else if(arrayIncludes('6O','7O','8O'))
    {
        drawWinLine(50,508,558,508);
    }
    //O 0, 3, 6 condition
    else if(arrayIncludes('0O','3O','6O'))
    {
        drawWinLine(100,50,100,558);
    }
    //O 1, 4, 7 condition
    else if(arrayIncludes('1O','4O','7O'))
    {
        drawWinLine(304,50,304,558);
    }
    //O 2, 5, 8 condition
    else if(arrayIncludes('2O','5O','8O'))
    {
        drawWinLine(508,50,508,558);
    }
    //O 6, 4, 2 condition
    else if(arrayIncludes('6O','4O','2O'))
    {
        drawWinLine(100,508,510,90);
    }
    //O 0, 4, 8 condition
    else if(arrayIncludes('0O','4O','8O'))
    {
        drawWinLine(100,100,520,520);
    }
    //This condition checks for a tie
    else if(selectedSquares.length >=9)
    {
        //Plays the tie sound
        audio('./media/tie.mp3');
        //sets a timer before the resetGame is called
        setTimeout(function () {resetGame();}, 1000);
    }

    function arrayIncludes(squareA,squareB,squareC)
    {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the three variables we pass are all included in our array true is
        //returned and our else if condition exectues the drawWinLine function
        if(a === true && b === true && c === true) { return true; }
    }
}

//This function makes our body element temporarily unclickable
function disableClick()
{
    //makes unclickable
    body.style.pointerEvents = 'none';
    //makes clickable again from a timer
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//this function takes a string parameter for the audio files path
function audio(audioURL)
{
    //We create a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //play method plays our audio sound
    audio.play();
}

//this function utilizes html canvas to draw lines
function drawWinLine(coordX1,coordY1,coordX2,coordY2)
{
    //This line accesses our html canvas element
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //This line indicateds where the start of a line x axis is
    let x1 = coordX1,
        //This line indicates where the start of a line y axis is
        y1 = coordY1,
        //This line indicates where the end of a line x axis is
        x2 = coordX2,
        //This line indicates where the end of a line y axis is
        y2 = coordY2,
        //This variable stores temporary x axis data we update in our animations loop
        x = x1,
         //This variable stores temporary y axis data we update in our animations loop
        y = y1;

    //This function interacts with the canvas
    function animateLineDrawing()
    {   
        //creates a loop from when the game ends and restarts
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from last loop iteration
        c.clearRect(0,0,608,608);
        //this method starts a new path
        c.beginPath();
        //This method starts a new starting point for our line
        c.moveTo(x1,y1);
         //This method indicates the end point of our line
        c.lineTo(x,y);
        //sets the width of our line
        c.lineWidth = 10;
        //sets the color of the line
        c.strokeStyle = 'rgba(70,255,33,.8)';
        //draws everything above
        c.stroke();
        //This condition checks if we've reached the endpoint
        if(x1 <= x2 && y1 <= y2)
        {
            //This condition adds 10 to the previous x point
            if(x < x2) { x+=10; }
            //This condition adds 10 to the previous y point
            if(y < y2) { y+= 10;}
            //Cancels out animation loop if end point is reached
            if(x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
        }
        //This condition is similar to the one above
        //It was neccessary for the 6, 4, 2 win conditions
        if(x1 <= x2 && y1 >= y2)
        {
            if(x < x2) {x+=10;}
            if(y > y2) {y-=10;}
            if(x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
        }
    }

    //This function clears our canvas after our win line is drawn
    function clear()
    {
        //This line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas
        c.clearRect(0,0,608,608);
        //stops the animation
        cancelAnimationFrame(animationLoop);
    }

    //this line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sounds
    audio('./media/win-sound.wav');
    //calls our main animation loop
    animateLineDrawing();
    //This line waits one second
    //Then clears canvas, resets game and allows clicking again
    setTimeout(function () {clear(); resetGame(); }, 1000);
}

//This function resets the game in a tie or a win
function resetGame()
{
    //This for loop iterates through each html element square
    for(let i=0; i < 9; i++)
    {
        //This variable gets the html element of i
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage.
        square.style.backgroundImage = '';
    }

    //This resets our array so it is empty and we can start over
    selectedSquares = [];
}