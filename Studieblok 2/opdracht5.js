var namen = ["Zoe","Bram","Clarissa","Isa","Gerrie"];

for (var i = 0; i < namen.length; i++) {
    document.write(namen[i] + "<br>");
}

var zero = 0;

while (zero < namen.length) {
    document.write(namen[zero] + "<br>");
    zero++;
}

document.write("<br>" + namen.toString());

var length = namen.length;
document.write("<br>" + length);

namen.push("Sander")

document.write("<br>" + namen.toString());

document.write("<br>" + namen.join(" # "));

document.write("<br>" + namen.sort().join(" * "));
