var imageContainer = $(".image-container");

$(document).ready(function() {

    $(".slider").mouseup(function(event) {
        var slider = $(".slider").val();

        if (slider <= 25) {
            imageContainer.animate({left: '0px'}, 'slow')
        }

        else if  (slider <= 50) {
            imageContainer.animate({left: '-300'}, 'slow')
        }
        else if (slider <= 75) {
            imageContainer.animate({left: '-600'}, 'slow')
        }
        else if (slider <= 100) {
            imageContainer.animate({left: '-900'}, 'slow')
        }

    });
});
