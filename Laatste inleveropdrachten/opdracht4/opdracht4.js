// GENDER SELECTION
var form = $("form,body");//TURNING THE FORM AND BODY INTO AN EASILY ACCESSABLE VARIABLE
var thingsToChangeColors = $("input,textarea,select");//THESE ARE THE THINGS THAT NEED TO CHANGE COLOR ON THE SCREEN
var keyEvent = $("input");//THIS DEFINES THE FIELDS THAT HAVE REGEX AND NEED TO HAVE A KEY-UP EVENT

keyEvent.attr('onkeyup', 'testRegex(this)');//KEY-UP EVENT IS ADDED TO ALL INPUT FIELDS WITH (THIS) ADDED TO HAVE ACCESS TO IT INDUVIDUALLY

$("#male, #female").click(function(event) {//THIS IS A FUNCTION TO CHECK WHICH GENDER BUTTON HAS BEEN CLICKED
    $(".button-container").fadeOut('slow', function() {//THIS FADES OUT THE GENDER BUTTON CONTAINER
        form.fadeIn('slow');//THIS FADES IN THE FORM AT A SLOW PACE
        form.css('display', 'grid');//BECAUSE THE FADE-IN SET THE DISPLAY CSS VALUE TO BLOCK INSTEAD OF GRID IT IS HERE WITH THIS FUNCTION AGAIN TRANSFORMED TO GRID
        $(".button-container").remove();//THE GENDER BUTTON CONTAINER CAN BE REMOVED TO MAKE ROOM IN THE GRID FOR THE FORM

        genderSelected = event.target.id;//THIS PICKS UP THE ID OF THE BUTTON PRESSED, EITHER MALE OR FEMALE

        if (genderSelected == 'male') {//IF ID MATCHES 'MALE'
            form.css('background-color', 'darkgreen');//SET BACKGROUND COLOR OF FORM AND BODY TO DARKGREEN
            thingsToChangeColors.css('background-color', 'lightgreen');//SET THE INPUT FIELDS TO LIGHTGREEN
        } else {
            form.css('background-color', 'purple');//SET THE BACKGROUND COLOR OF THE FORM AND BODY TO PURPLE
            thingsToChangeColors.css('background-color', 'pink');//SET THE INPUT FIELDS TO PINK
        }

    });
});
// GENDER SELECTION

// START OF INPUT FIELD CODE
function testRegex(x){//THIS IS A FUNCTION TO CHECK THE REGEX OF THE INPUT FIELDS, IT HAS BEEN GIVEN THE X TO REFER BACK TO (THIS) ON THE KEY-UP FUNCTION

    // START OF REGEX CODE

    var current_regex = new RegExp($("#"+x.id).attr("regex"), "i");
    var inputFieldValue = $("#"+x.id).val();
    
    if (current_regex.test(inputFieldValue)) {
        //IF RESULT == TRUE
        $("#"+x.id).css('background-color', 'green').css('color', '#000');//SETS BACKGROUND TO GREEN AND TEXT TO BLACK
        // console.log('the value of #'+x.id+' = '+result);  //THIS IS A LOG TO CONFIRM THE TRUE OR FALSE VALUES
    } else {
        //IF RESULT == FALSE
        $("#"+x.id).css('background-color', 'Maroon').css('color', '#FFF');//SETS BACKGROUND TO MAROON(RED) AND TEXT TO WHITE
        // console.log('the value of #'+x.id+' = '+result);  //THIS IS A LOG TO CONFIRM THE TRUE OR FALSE VALUES
    }
}
    // END OF REGEX CODE
