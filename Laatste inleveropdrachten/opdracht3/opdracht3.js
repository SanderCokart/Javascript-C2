var storedText;

$(document).ready(function() {
    var inputBox = $("#name-field");
    var addName = $("#add-name");
    var buttonToRight = $("#move-right");
    var buttonToLeft = $("#move-left");
    var leftBox = $("#left-box");
    var rightBox = $("#right-box");
    var textArray = [];
    var idCounter = 0;

    addName.click(function(event) {
        var inputText = inputBox.val();
        inputBox.val('')
        textArray.push(inputText);
        leftBox.append("<p id="+idCounter+" onclick='clickOnText(this)'>"+inputText+"</p>");
        idCounter++;
    });


    buttonToRight.click(function(event) {
        if (textArray[storedText] === undefined) {
            alert('Please select text from either box and then move it with the buttons');
            inputBox.attr('placeholder', 'OR TYPE HERE');
        } else {
                rightBox.append("<p id="+idCounter+" onclick='clickOnText(this)'>"+textArray[storedText]+'</p>')
                textArray.push(textArray[storedText]);
                $("#"+storedText).remove();
                idCounter++;
                storedText = "";
        }

    });

    buttonToLeft.click(function(event) {
        if (textArray[storedText] === undefined) {
            alert('Please select text from either box and then move it with the buttons');
            inputBox.attr('placeholder', 'OR TYPE HERE');
        } else {
                leftBox.append("<p id="+idCounter+" onclick='clickOnText(this)'>"+textArray[storedText]+'</p>')
                textArray.push(textArray[storedText]);
                $("#"+storedText).remove();
                idCounter++;
                storedText = "";
        }


    });




});

function clickOnText(thisVar){
    storedText = thisVar.id;
    $('p').css('background-color', 'initial');
    $(thisVar).css('background-color', 'red');
}
