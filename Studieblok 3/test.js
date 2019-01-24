function vertaal(){
    this.innerHTML = "Hallo wereld!";
}

function maakEvents()
{
// Alle HTML-elementen hebben een event met dezelfde functie
// Maar toch zal die functie alleen het element waarop geklikt wordt 'vertalen'
document.getElementById("translate_me1").onclick = vertaal;
document.getElementById("translate_me2").onclick = vertaal;
document.getElementById("translate_me3").onclick = vertaal;
document.getElementById("translate_me4").onclick = vertaal;
document.getElementById("translate_me5").onclick = vertaal;
}

window.onload = maakEvents;
