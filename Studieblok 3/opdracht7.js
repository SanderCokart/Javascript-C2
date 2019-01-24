var person = document.getElementsByClassName('person');

function showDetails(button){

    if (button.innerText == "Show Details") {
        button.innerText = "Hide Details";
        person[0].innerHTML =
        "Name: Sander Cokart<br>Birthday: 25-04-1998<br>City: Emmen<br><br>";
    }
    else {
        button.innerText = "Show Details"
        person[0].innerText =
        `Name: Sander Cokart`;
    }
}
