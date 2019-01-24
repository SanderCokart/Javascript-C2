var woord = "opleiding";
woord.charAt(5);
function verticalText(){
    woordArray = woord.split("");

    for(i = 0; i < woordArray.length;i++){
        document.write (woordArray[i]+"<br>");
    }
}
