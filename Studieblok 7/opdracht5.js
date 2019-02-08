var score = 0;
var firstClick;
var storedClick;

$(document).ready(function() {

    $(".row>div").click(function() {
        var firstClick = this.className;
        if (firstClick == storedClick) {
            score++;
            if (score == 8) {
                alert('you got '+score+' points!');
                location.reload();
            }
            $(".row>div").removeClass(this.className);
        } else {
            storedClick = firstClick;
        }

        $("#score").text('Score: '+score);
    });

});
