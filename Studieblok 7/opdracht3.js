$("div.form>form>input").mouseenter(function(event) {
    $($(this)).css('border', 'solid 5px red');
});

$("div.form>form>input").mouseleave(function(event) {
    $($(this)).css('border', 'solid 1px black');
    /* Act on the event */
});
