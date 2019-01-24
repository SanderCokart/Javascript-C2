var counter = 0;

function showPrompt(){
    var nameObject = document.getElementById(`names`);
    var inputName = prompt("Please enter a name:","Name");

    if (inputName == null ||inputName == ""||inputName == "Name") {
        alert(`User didn't enter a new name!`);
    }

    else if (counter == 0) {
        nameObject.innerText += ` ${inputName}`;
        counter++;
    }

    else {
        nameObject.innerText += `, ${inputName}`;
    }
}
