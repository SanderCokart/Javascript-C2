function lightMode(){
    document.getElementById('body').setAttribute('style','color:black; background-color: white;');
}

function darkMode(){
    document.getElementById('body').setAttribute('style','color:white; background-color: black;');
}

function date(){
    document.getElementById('header').innerHTML = Date();
}
