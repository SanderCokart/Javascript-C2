var placeTurn = 0;//keeps track of whose turn it is
var slots = document.getElementsByClassName('slot');//sets the slot class to a variable (these are multiple)

function place(td){//function to place a symbol down
    var slot = document.getElementById(td.id);//makes a variable of the induvidual slot id's

    if(placeTurn == 0){//if placeTurn compares to 0
        if (slot.innerText == "") {//if the slot is empty
            slot = td.innerText = "X";//insert an X
            placeTurn++;//increment the placeTurn variable
        } else {
            alert("THIS SPOT IS TAKEN!");//if innerText is not empty give an error
        }
    }
    else {
        if (slot.innerText == "") {//same thing but for player 2
            slot = td.innerText = "O";
            placeTurn--;//decements the turn counter
        } else {
            alert("THIS SPOT IS TAKEN!");
        }
    }
}

function reset(){//a function that runs when you press the reset button
    for (var i = 0; i < slots.length; i++) {
        slots[i].innerText = "";//sets the innerTextof all the slot locations
    }
}
