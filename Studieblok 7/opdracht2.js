$("button").click(function() {
    if (randomNumber() > 0) {
        $('div').addClass('red')
        $('div').removeClass('green')
    } else {
        $('div').addClass('green')
        $('div').removeClass('red')
    }
});


function randomNumber(){
    return number = Math.floor((Math.random() * 2));
}
