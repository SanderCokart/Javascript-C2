var currentSquare = 12;
var previousSquare = 12;

function start(){
var startSquare = document.getElementById(currentSquare);
startSquare.style.backgroundColor = "black";
}


function moveSquare(){
    var key = event.which;
    console.log(key);

    if (key == 40) {
        document.getElementById(currentSquare).style.backgroundColor = "white";
        currentSquare += 5;
        document.getElementById(currentSquare).style.backgroundColor = "black";
    }

    else if (key == 39) {
        document.getElementById(currentSquare).style.backgroundColor = "white";
        currentSquare += 1;
        document.getElementById(currentSquare).style.backgroundColor = "black";
    }

    else if (key == 38) {
        document.getElementById(currentSquare).style.backgroundColor = "white";
        currentSquare -= 5;
        document.getElementById(currentSquare).style.backgroundColor = "black";
    }

    else if (key == 37) {
        document.getElementById(currentSquare).style.backgroundColor = "white";
        currentSquare -= 1;
        document.getElementById(currentSquare).style.backgroundColor = "black";
    }

}

document.onkeydown = moveSquare;
window.onload = start;
