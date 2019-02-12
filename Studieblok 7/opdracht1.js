$(".button1").one('click', function() {//when button1 class is clicked, run this fucntion once
    var name = $(".button1").text();//makes a variable that is equal to the text within the button
    $(".wrapper").append(name);//appends the variable 'name' to the div.wrapper
});

$(".button1").one('mouseenter', function() {//when you enter button1 with the mouse it does the same thing
    var name = $(".button1").text();
    $(".wrapper").append(name);
});

$(".button2").click(function() {//when you click button2
    $(".wrapper").append('helloworld!');//append hellowold! to the div.wrapper
});



$(".button3").click(function() {//when you press button3
    number = Math.floor((Math.random() * 2));//variable number equals a random number between 0 and 1

    if (number > 0) {//if the number is bigger than 0
        $(".button1").click();//click .button1
    } else {
        $(".button2").click();//click .button2
    }
});
