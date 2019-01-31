$(document).ready(function() {

    $("#button-blue").click(function() {
        $("div.kleurAanpasbaar li").css('color', 'blue');
        $("#button-blue").hide();
        $("#button-black").show();
    });

    $("#button-black").click(function() {
        $("div.kleurAanpasbaar li").css('color', 'black');
        $("#button-black").hide();
        $("#button-blue").show();
    });

});
