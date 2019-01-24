function bold(x){
var i = document.getElementById(x.id);

    if (event.shiftKey) {
        i.style.fontWeight = "normal";
    }

    else {
        i.style.fontWeight = "bold";
    }
}
