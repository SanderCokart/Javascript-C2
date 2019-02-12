$("div.form>form>input").mouseenter(function(event) {//when you enter the input field with the mouse
    $($(this)).css('border', 'solid 5px red');//set the css border property of the current element to red, 5px, solid
});

$("div.form>form>input").mouseleave(function(event) {//on mouse leave
    $($(this)).css('border', 'solid 1px black');//set to black
});
