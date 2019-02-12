$("button").click(function() {//when a button is clicked
    if (randomNumber() > 0) {//if the randomly generated number is bigger than 0
        $('div').addClass('red')//add class red
        $('div').removeClass('green')//remove class green
    } else {
        $('div').addClass('green')//add class green
        $('div').removeClass('red')//remove class red
    }
});


function randomNumber(){//generates a randomNumber between 0 and 1
    return number = Math.floor((Math.random() * 2));
}
