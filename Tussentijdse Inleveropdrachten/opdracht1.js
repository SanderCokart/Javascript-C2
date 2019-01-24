var placeTurn = 0;
var slots = document.getElementsByClassName('slot');

function place(td){
    var slot = document.getElementById(td.id);

    if(placeTurn == 0){
        slot = td.innerText = "X";
        placeTurn++;
    }
    else {
        slot = td.innerText = "O";
        placeTurn--;
    }
}

function reset(){
    for (var i = 0; i < slots.length; i++) {
        slots[i].innerText = "";
    }
}
