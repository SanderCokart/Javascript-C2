function timer(){
    var input = document.getElementById('input').value;
    var seconds = input*1000;
    setTimeout(alertFunc, seconds);

}

function alertFunc(){
    alert(`TIMER HAS ENDED!`)
}
