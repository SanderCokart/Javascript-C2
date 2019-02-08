$("button").click(function(event) {
    $("p:eq(0)").toggle('slow', function() {
        setTimeout(function () {
            $("p:eq(0)").remove();
            $("div").append('<p hidden>BREAKING NEWS!</BREAKING></SOE></p>');
            $("p:eq(4)").toggle(2000);
        }, 1);
    });;

});
