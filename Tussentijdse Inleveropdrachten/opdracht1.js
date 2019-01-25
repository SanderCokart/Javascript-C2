var placeTurn = 0;
var slots = document.getElementsByClassName('slot');

function place(td){
    var slot = document.getElementById(td.id);

    if(placeTurn == 0){
        if (slot.innerText == "") {
            slot = td.innerText = "X";
            placeTurn++;
        } else {
            alert("THIS SPOT IS TAKEN!");
        }
    }
    else {
        if (slot.innerText == "") {
            slot = td.innerText = "O";
            placeTurn--;
        } else {
            alert("THIS SPOT IS TAKEN!");
        }
    }
}

function reset(){
    for (var i = 0; i < slots.length; i++) {
        slots[i].innerText = "";
    }
}
