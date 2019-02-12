function bold(x){//A function that when clicked on Will turn to text into Bold And when the shift key is pressed turns it into normal
var i = document.getElementById(x.id);

    if (event.shiftKey) {
        i.style.fontWeight = "normal";
    }

    else {
        i.style.fontWeight = "bold";
    }
}
