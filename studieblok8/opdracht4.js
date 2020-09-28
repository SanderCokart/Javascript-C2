var imageContainer = $(".image-container");//turns the image-container into a variable

$(document).ready(function() {//when document is ready and loaded

    $(".slider").mouseup(function(event) {//when you release the mouse button on the slider
        var slider = $(".slider").val();//takes the value of the range slider

        if (slider <= 25) {//if slider value is less then or equal to 25
            imageContainer.animate({left: '0px'}, 'slow')//set the left position to 0 px
        }

        else if  (slider <= 50) {//if slider value is less then or equal to 50
            imageContainer.animate({left: '-300'}, 'slow')//set the left position to -300 px
        }
        else if (slider <= 75) {//if slider value is less then or equal to 75
            imageContainer.animate({left: '-600'}, 'slow')//set the left position to -600 px
        }
        else if (slider <= 100) {//if slider value is less then or equal to 100
            imageContainer.animate({left: '-900'}, 'slow')//set the left position to -900 px
        }

    });
});
