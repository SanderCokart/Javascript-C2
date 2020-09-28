function timer(){//Function that runs whenever the button is pressed that will let a timer run and then give an alert
    var input = document.getElementById('input').value;
    var seconds = input*1000;
    setTimeout(alertFunc, seconds);

}

function alertFunc(){//the function that runs to give the alert, this function is triggerd by the timer
    alert(`TIMER HAS ENDED!`)
}
