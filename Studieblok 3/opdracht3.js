
function cursive(){
    var x = document.getElementById('div');
    x.style.fontStyle = "italic";
}

function restore(){
    var x = document.getElementById('div');
    x.style.fontStyle = "normal";
}

function vertaal(){
    var text = document.getElementById('div');

    if (text.innerHTML == "HELLO WORLD!") {
        text.innerHTML = "HALLO WERELD!";
    }

    else if (text.innerHTML == "HALLO WERELD!") {
        text.innerHTML = "HELLO WORLD!";
    }

    else {
        alert("ERROR")
    }
}
