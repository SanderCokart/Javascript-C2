document.onkeydown = moveSquare;//when you press a key on the document it runs the function moveSquare
var start = 12;//start position of the square
var next = start;//variable used to check the next position

document.getElementById('12').style.backgroundColor = "black";//starts the box in div 12

function moveSquare(){//function to move the actual square
    if (event.key === "ArrowUp") {//if you press ArrowUp
        if (checkSquare(event.key, next)) { //check whether or not in can move in this direction with function checkSquare, if it returns true it
                                            //will run continue running the moveSquarefunction
            document.getElementById(next).style.backgroundColor = "white";//set the background of the current div to white
            next -= 5;
            document.getElementById(next).style.backgroundColor = "black";//set the background of the next div to black
        }
    }
    if (event.key === "ArrowDown") {//if you press ArrowDown
        if (checkSquare(event.key, next)) { //check whether or not in can move in this direction with function checkSquare, if it returns true it
                                            //will run continue running the moveSquarefunction
            document.getElementById(next).style.backgroundColor = "white";//set the background of the current div to white
            next += 5;
            document.getElementById(next).style.backgroundColor = "black";//set the background of the next div to black
        }
    }
    if (event.key === "ArrowLeft") {//if you press ArrowLeft
        if (checkSquare(event.key, next)) { //check whether or not in can move in this direction with function checkSquare, if it returns true it
                                            //will run continue running the moveSquarefunction
            document.getElementById(next).style.backgroundColor = "white";//set the background of the current div to white
            next -= 1;
            document.getElementById(next).style.backgroundColor = "black";//set the background of the next div to black
        }
    }
    if (event.key === "ArrowRight") {//if you press ArrowRight
        if (checkSquare(event.key, next)) { //check whether or not in can move in this direction with function checkSquare, if it returns true it
                                            //will run continue running the moveSquare function
            document.getElementById(next).style.backgroundColor = "white";//set the background of the current div to white
            next += 1;
            document.getElementById(next).style.backgroundColor = "black";//set the background of the next div to black
        }
    }   //the checkSquare fucntion is given 2 paramaters
        //the first one is the key that is pressed
        //the second one is the number that will be the next location for the black box
}

function checkSquare(keyPressed, squareToCheck){//function that will check the next square
    if (keyPressed === "ArrowUp") {//if the key that is pressed compares to ArrowUp
        //checks to make sure that the current box doesn't equal any of the top border boxes
        if (squareToCheck != 0 && squareToCheck != 1 && squareToCheck != 2 && squareToCheck != 3 && squareToCheck != 4) {
            return true;
        } else {
            return false;
        }
    }
    if (keyPressed === "ArrowDown") {//if the key that is pressed compares to ArrowDown
        //checks to make sure that the current box doesn't equal any of the bottom border boxes
        if (squareToCheck != 20 && squareToCheck != 21 && squareToCheck != 22 && squareToCheck != 23 && squareToCheck != 24) {
            return true;
        } else {
            return false;
        }
    }
    if (keyPressed === "ArrowLeft") {//if the key that is pressed compares to ArrowLeft
        //checks to make sure that the current box doesn't equal any of the left border boxes
        if (squareToCheck != 0 && squareToCheck != 5 && squareToCheck != 10 && squareToCheck != 15 && squareToCheck != 20) {
            return true;
        } else {
            return false;
        }
    }
    if (keyPressed === "ArrowRight") {//if the key that is pressed compares to ArrowRight
        //checks to make sure that the current box doesn't equal any of the right border boxes
        if (squareToCheck != 4 && squareToCheck != 9 && squareToCheck != 14 && squareToCheck != 19 && squareToCheck != 24) {
            return true;
        } else {
            return false;
        }
    }
}
