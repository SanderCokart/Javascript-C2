$(document).ready(function() {
    var number;//this is the randomly generated number

$("div").click(function() {//when you click on a div

    //console.log($(this).css('background-color'));

    //if the background color equals any color that is possible it removes the class where it came from
    if ($(this).css('background-color') == "rgb(255, 0, 0)") {
        $("div").removeClass('red');
        //console.log('remove red');
        return
    }
    if ($(this).css('background-color') == "rgb(0, 128, 0)") {
        $("div").removeClass('green');
        //console.log('remove green');
        return
    }
    if ($(this).css('background-color') == "rgb(0, 0, 255)") {
        $("div").removeClass('blue');
        //console.log('remove blue');
        return
    }


    else if ($(this).css('background-color') == "rgba(0, 0, 0, 0)") {//if the background color is transparent (because divs dont start off as white)
    randomNumber();//runs the random number generator to generate a new number
    switch (number) {//based on the number the color will be randomized
        case 1:
        $(this).addClass('blue')
        //console.log('add blue');
        break;
        case 2:
        $(this).addClass('red')
        //console.log('add red');
        break;
        case 3:
        $(this).addClass('green ')
        // console.log('add green');
        break;
        default: "error, reload the page please"//in case anything goes wrong
    }
} else {
    document.write("error, reload the page please")//in case anything goes wrong in the if else statements
}
});

function randomNumber(){
    number = 1 + Math.floor(Math.random() * 3);//generates a random number between 1 and 3
}

});
