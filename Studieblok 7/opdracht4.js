var color = 'red';

$("div").mouseenter(function() {//when mouse enters a div
    $($(this)).css('background-color', color);//set the color of the background of the current div to color variable
});
$("div").mouseleave(function() {//on mouse leave
    $($(this)).css('background-color', 'grey');//set the background back to grey
});

$("button#red").click(function(event) {//when you click on the button with an ID 'red'
    color = 'red';//set color variable to red
});
$("button#blue").click(function(event) {//when you click on the button with an ID 'blue'
    color = 'blue';//set color variable to blue
});
$("button#green").click(function(event) {//when you click on the button with an ID 'green'
    color = 'green';//set color variable to green
});
