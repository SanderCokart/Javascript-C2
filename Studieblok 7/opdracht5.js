var score = 0;
var firstClick;
var storedClick;

$(document).ready(function() {

    $(".row>div").click(function() {
        // alert(this.className);
        var firstClick = this.className;

        if (firstClick == storedClick) {
            score++;
            console.log(score);
        } else {
            storedClick = firstClick;
        }

        $("#score").text('Score: '+score);
    });

});
