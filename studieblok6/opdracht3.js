$(document).ready(function() {//when document is ready and loaded

    $("#button-blue").click(function() {//when button-blue is pressed
        $("div.kleurAanpasbaar li.aanpasbaar").css('color', 'blue');//change the color of the li with the class kleurAanpasbaarbut only if the div class where its in also equals to kleurAanpasbaar
        $(this).hide();//hides itself
        $("#button-black").show();//shows button-black
    });

    $("#button-black").click(function() {
        $("li").css('color', 'black');//change the text of all the li elements to the original color
        $(this).hide();//hides itself
        $("#button-blue").show();//shows button-blue
    });

});
