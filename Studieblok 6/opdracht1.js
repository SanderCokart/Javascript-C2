$(document).ready (function(){//when the document is loaded and ready
//the next assignments are done using jquery
    $("#a").click(function hide() {//when an element with the ID a is clicked
        $("#a, li").hide();//hide the li elements as well as itself
        $("#b").show();//shows the b element (show button)
    });

    $("#b").click(function show() {//when button b is pressed
        $("#a, li").show();//shows the list items as well as the hide button
        $("#b").hide();//hides itself
    });

    $("#c").click(function test() {//whenever button c is pressed
        $(".test").remove();//remove anything with the class 'test'
    });

    $("#d-blue").click(function() {//when button d-blue is pressed
        $("li").css('color', 'blue');//turn the text of the list items blue
        $("#d-blue").hide();//hide the d-blue button
        $("#d-black").show();//show the d-black button
    });

    $("#d-black").click(function() {//when button d-black is pressed
        $("li").css('color', 'black');//turn the text of the list items black
        $("#d-black").hide();//hides itself
        $("#d-blue").show();//shows the d-blue button
    });

});
