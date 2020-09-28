var woord = "opleiding";
//this is a function to write vetical text using the split method to seperate characters
function verticalText(){
    woordArray = woord.split("");   //splits the letters and puts each one in an array

    for(i = 0; i < woordArray.length;i++){
        document.write (woordArray[i]+"<br>");  //loops through the array and
                                                // spits out each character in a vertical manner
    }
}

function verticalTextV2(){
    for (var i = 0; i < woord.length; i++) {
        document.write(woord.charAt(i) + "<br>");   //loops through the character 
                                                    // positions and spits them out in a vertical fashion
    }
}
