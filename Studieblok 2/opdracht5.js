var namen = ["Zoe","Bram","Clarissa","Isa","Gerrie"];//Creates an array with 5 names

for (var i = 0; i < namen.length; i++) {//Runs the for loop for as long as the array is
    document.write(namen[i] + "<br>");//Writes out the array With an enter after each one
}

var zero = 0;
//Does the same thing but using a while loop
while (zero < namen.length) {
    document.write(namen[zero] + "<br>");
    zero++;
}

document.write("<br>" + namen.toString());//Turns the array into a string and writes them out as a string

var length = namen.length;
document.write("<br>" + length);//Spits out the length of the array

namen.push("Sander")//Adds my name to the array

document.write("<br>" + namen.toString());//Converts the array to a string again

document.write("<br>" + namen.join(" # "));//Turns the array into a string But separating them with a pound sign

document.write("<br>" + namen.sort().join(" * "));//Doing the same thing but using a multiply sign
