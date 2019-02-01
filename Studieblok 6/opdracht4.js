$(document).ready(function() {
    var number;

$("div").click(function() {

    //console.log($(this).css('background-color'));

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


    else if ($(this).css('background-color') == "rgba(0, 0, 0, 0)") {
    randomNumber();
    switch (number) {
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
        console.log('add green');
        break;
        default: "error"
    }
} else {
    document.write("error")
}
});

function randomNumber(){
    number = 1 + Math.floor(Math.random() * 3);
}

});
