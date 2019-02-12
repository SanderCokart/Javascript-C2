//basic function that takes 3 inputs
// Input 1 is a
// Input 2 is the operator
// Input 3 is c
function calculate(a,op,b){ //this is a function that compares the
                            // operator variable against a few if statements
    if (op == '+') {
        return (a + b);
    }
    else if (op == '-') {
        return (a - b);
    }
    else if (op == '*') {
        return (a * b);
    }
    else if (op == '/') {
        return (a / b);
    }
    else {
        return("Invalid entry");
    }
}


function calculateSwitch(a,op,b){//this is the same thing but using a switch instead
    switch (op) {
        case '+':
        return (a + b);
            break;
        case '-':
        return (a - b);
            break;
        case '*':
        return (a * b);
            break;
        case '/':
        return (a / b);
            break;
        default:
        return ("invalid entry");

    }
}
