$("button").click(function(event) {//when you click a button
    $("p:first").toggle('slow', function() {//toggle the first p element
        setTimeout(function () {//starts a timeout timer when the animation is finished
            $("p:first").remove();//when timer is done remove the first p element
            $("div").append('<p hidden>BREAKING NEWS!</BREAKING></SOE></p>');//inserts a new p element
            $("p:last").toggle(2000);//toggles the last element to become visable
        }, 250);//250ms is the timer length
    });;

});
