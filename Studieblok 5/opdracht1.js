function Validate(){
    var regexPost = "/[0-9]{4}[a-z]{2}/i";
    var regexEmail = "/^.*@.*\\..*$/";
    var regexPhone = "/[0-9]{10}/";
    var regexAdres = "/^[a-z]* [0-9]*$/i";
    var regexGender = "/^(fe)?male$/i";

    document.write (regexPost+"<br>");
    document.write (regexEmail+"<br>");
    document.write (regexPhone+"<br>");
    document.write (regexAdres+"<br>");
    document.write (regexGender);
}
