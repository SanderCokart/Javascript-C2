document.onkeydown = moveSquare;
var start = 12;
var next = start;

document.getElementById('12').style.backgroundColor = "black";

function moveSquare(){
    if (event.key === "ArrowUp") {
        if (checkSquare(event.key, next)) {
            document.getElementById(next).style.backgroundColor = "white";
            next -= 5;
            document.getElementById(next).style.backgroundColor = "black";
        }
    }
    if (event.key === "ArrowDown") {
        if (checkSquare(event.key, next)) {
            document.getElementById(next).style.backgroundColor = "white";
            next += 5;
            document.getElementById(next).style.backgroundColor = "black";
        }
    }
    if (event.key === "ArrowLeft") {
        if (checkSquare(event.key, next)) {
            document.getElementById(next).style.backgroundColor = "white";
            next -= 1;
            document.getElementById(next).style.backgroundColor = "black";
        }
    }
    if (event.key === "ArrowRight") {
        if (checkSquare(event.key, next)) {
            document.getElementById(next).style.backgroundColor = "white";
            next += 1;
            document.getElementById(next).style.backgroundColor = "black";
        }
    }
}

function checkSquare(keyPressed, squareToCheck){
    if (keyPressed === "ArrowUp") {
        if (squareToCheck != 0 && squareToCheck != 1 && squareToCheck != 2 && squareToCheck != 3 && squareToCheck != 4) {
            return true;
        } else {
            return false;
        }
    }
    if (keyPressed === "ArrowDown") {
        if (squareToCheck != 20 && squareToCheck != 21 && squareToCheck != 22 && squareToCheck != 23 && squareToCheck != 24) {
            return true;
        } else {
            return false;
        }
    }
    if (keyPressed === "ArrowLeft") {
        if (squareToCheck != 0 && squareToCheck != 5 && squareToCheck != 10 && squareToCheck != 15 && squareToCheck != 20) {
            return true;
        } else {
            return false;
        }
    }
    if (keyPressed === "ArrowRight") {
        if (squareToCheck != 4 && squareToCheck != 9 && squareToCheck != 14 && squareToCheck != 19 && squareToCheck != 24) {
            return true;
        } else {
            return false;
        }
    }
}
