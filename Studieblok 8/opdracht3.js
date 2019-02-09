var number;

$(".card,.card1").mouseenter(function() {
    $(this).width('100%');
});

$(".card,.card1").mouseleave(function(event) {
    $(this).width('50%');
});

$("div.card").click(function(event) {
    $(this).slideUp('slow')
});
$("div.card1").click(function(event) {
    $(this).hide('slow', function() {
        $(this).show('slow');
    });
});

$(".reset").click(function(event) {
    $("div.card").slideDown('slow')
});
