
function cursive(){ //Function to change the elements with the ID
                    // div to italic when the mouse in hovering over the element
    var x = document.getElementById('div');
    x.style.fontStyle = "italic";
}

function restore(){//When mouse moves away from the element It returns the text back to normal
    var x = document.getElementById('div');
    x.style.fontStyle = "normal";
}

function vertaal(){//When do user clicks the Element It checks What the inner HTML is and depending on what it is Will turn it from English to Dutch or vice versa
    var text = document.getElementById('div');

    if (text.innerHTML == "HELLO WORLD!") {
        text.innerHTML = "HALLO WERELD!";
    }

    else if (text.innerHTML == "HALLO WERELD!") {
        text.innerHTML = "HELLO WORLD!";
    }

    else {
        alert("ERROR")//if anything goes wrong an error will show up
    }
}
