var sentence = "applicatie ontwikkelaar";

function getLength(){
    return (sentence.length+"<br>");
}

function getOntwikkelaar(){
    return sentence.indexOf("ontwikkelaar")+"<br>";
}

function getWikkelaar(){
    return sentence.indexOf("wikkelaar")+"<br>";
}

function getSub(){
    var search = "wik";
    var startPos = sentence.indexOf(search);


    return sentence.substr(startPos, search.length)+"<br>";
}

function getSlice(){
    var search = "wik";
    var startPos = sentence.indexOf(search);

    return sentence.substr(startPos, search.length)+"<br>";
}

function replaceOntwikkelaar(){
    return sentence.replace('ontwikkelaar','programmeur')+"<br>";
}

function capitalize(){
    return sentence.toUpperCase();
}
