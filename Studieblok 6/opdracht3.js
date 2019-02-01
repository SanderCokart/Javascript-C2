$(document).ready(function() {

    $("#button-blue").click(function() {
        $("div.kleurAanpasbaar > li.aanpasbaar").css('color', 'blue');
        $("#button-blue").hide();
        $("#button-black").show();
    });

    $("#button-black").click(function() {
        $("div.kleurAanpasbaar >").css('color', 'black');
        $("#button-black").hide();
        $("#button-blue").show();
    });

});
