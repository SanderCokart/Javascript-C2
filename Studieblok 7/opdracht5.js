var score = 0;//score counter
var firstClick;//variable to keep track of the initial click's class
var storedClick;//

$(document).ready(function() {

    $(".row>div").click(function() {//when you click on a div withing a 'row' class
        var firstClick = this.className;//firstClick becomes the class name of the current element
        if (firstClick == storedClick) {//if the firstClick matches the storedClick
            score++;//add to score
            if (score == 8) {//if the score equals = to 8
                alert('you got '+score+' points!');//alerts the user of the score
                location.reload();//reloads the page when you win
            }
            $(".row>div").removeClass(this.className);//removes the class when you click on a div
        } else {
            storedClick = firstClick;//the firstClick gets stored
        }

        $("#score").text('Score: '+score);//changes the text of the score element
    });

});
