$(document).ready(function() {//when document is ready and loaded

    $("#button-blue").click(function() {//when button-blue is pressed
        $("div.kleurAanpasbaar li").css('color', 'blue');//turn the li elements that are within a div with the class kleurAanpasbaar blue
        $(this).hide();//hide itself
        $("#button-black").show();//shows button-black
    });

    $("#button-black").click(function() {
        $("div.kleurAanpasbaar>li").css('color', 'black');  //changes the li elements that are a
                                                            // DIRECT parent of the div with the class kleurAanpasbaar to black
        $(this).hide();//hides itself
        $("#button-blue").show();//shows button-blue
    });

});
