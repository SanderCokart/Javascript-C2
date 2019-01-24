function calculate(a,op,b){
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


function calculateswitch(a,op,b){
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
