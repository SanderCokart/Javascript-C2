var color = 'red';

$("div").mouseenter(function() {
    $($(this)).css('background-color', color);
});
$("div").mouseleave(function() {
    $($(this)).css('background-color', 'grey');
});

$("button#red").click(function(event) {
    color = 'red';
});
$("button#blue").click(function(event) {
    color = 'blue';
});
$("button#green").click(function(event) {
    color = 'green';
});
