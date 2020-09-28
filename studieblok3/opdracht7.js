var person = document.getElementsByClassName('person');//turns the element with the class name 'person' into a variable

function showDetails(button){//when the button is clicked

    //checks the value of the innerHTML of the button
    if (button.innerText == "Show Details") {//if it returns as 'Show Details'
        button.innerText = "Hide Details";//turn the button into 'Hide Details'
        person[0].innerHTML =//changes the first class position
        "Name: Sander Cokart<br>Birthday: 25-04-1998<br>City: Emmen<br><br>";//if true then give the extra details
    }
    else {
        button.innerText = "Show Details"//else hide the details again by changing the innerHTML
        person[0].innerText =
        `Name: Sander Cokart`;
    }
}
