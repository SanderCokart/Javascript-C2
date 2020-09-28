var sentence = "applicatie ontwikkelaar";

function getLength(){
    return sentence.length+"<br>";//spits out the length of the sentence variable
}

function getOntwikkelaar(){
    return sentence.indexOf("ontwikkelaar")+"<br>";//spits out the index location of the word 'ontwikkelaar'
}

function getWikkelaar(){
    return sentence.indexOf("wikkelaar")+"<br>";//gets the index location of the word 'wikkelaar'
}

function getSub(){
    var search = "wik";
    var startPos = sentence.indexOf(search);


    return sentence.substr(startPos, search.length)+"<br>";//spits out the word 'wik' using the substring method
}

function getSlice(){
    var search = "wik";
    var startPos = sentence.indexOf(search);

    return sentence.slice(startPos)+"<br>";//spits out the word 'wik' using the splice method
}

function replaceOntwikkelaar(){
    return sentence.replace('ontwikkelaar','programmeur')+"<br>";//replaces the word 'ontwikkelaar' with 'programmeur'
}

function capitalize(){
    return sentence.toUpperCase();//spits out the sentence in Uppercase
}
