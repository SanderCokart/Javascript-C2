$(document).ready (function(){

    $("#a").click(function hide() {
        $("#a, li").hide();
        $("#b").show();
    });

    $("#b").click(function show() {
        $("#a, li").show();
        $("#b").hide();
    });

    $("#c").click(function test() {
        $(".test").remove();
    });

    $("#d-blue").click(function() {
        $("li").css('color', 'blue');
        $("#d-blue").hide();
        $("#d-black").show();
    });

    $("#d-black").click(function() {
        $("li").css('color', 'black');
        $("#d-blue").show();
        $("#d-black").hide();
    });

});
