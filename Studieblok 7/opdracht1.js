$(".button1").one('click', function() {
    var name = $(".button1").text();
    $(".wrapper").append(name);
});

$(".button1").one('mouseenter', function() {
    var name = $(".button1").text();
    $(".wrapper").append(name);
});

$(".button2").click(function() {
    $(".wrapper").append('helloworld!');
});



$(".button3").click(function() {
    number = Math.floor((Math.random() * 2));

    if (number > 0) {
        $(".button1").click();
    } else {
        $(".button2").click();
    }
s});
