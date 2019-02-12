var number;

$(".card,.card1").mouseenter(function() {//when you enter card or card1 classes with the mouse
    $(this).width('100%');//set the width to 100%
});

$(".card,.card1").mouseleave(function(event) {//on mouse leave
    $(this).width('50%');//set weidth back to 50%
});

$("div.card").click(function(event) {//when you click on a card class
    $(this).slideUp('slow')//slide up the card at slow speed
});
$("div.card1").click(function(event) {//when you click on a card1 class
    $(this).hide('slow', function() {//hide the card at slow speed
        $(this).show('slow');//show the card again after the hide animation has finished
    });
});

$(".reset").click(function(event) {//when you click reset button
    $("div.card").slideDown('slow')//slide down all div.card's
});
