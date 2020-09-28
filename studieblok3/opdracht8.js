var counter = 0;//initializes a counter variable that starts at 0

function showPrompt(){//when a button is pressed a prompt will come up with an input field
    var nameObject = document.getElementById(`names`);//turns the element with the 'names' ID into a variable
    var inputName = prompt("Please enter a name:","Name");//lets the user insert a name within the prompt

    if (inputName == null ||inputName == ""||inputName == "Name") {
        alert(`User didn't enter a new name!`);//if the input is null (nothing) then alert the user
    }

    else if (counter == 0) { //if counter compares to 0
        nameObject.innerText += ` ${inputName}`;//adds the inputName variable to the innerText of the element
        counter++;
    }

    else {
        nameObject.innerText += `, ${inputName}`;//if counter is != 0 then start doing the same thing but seperating the names with commas
    }
}
