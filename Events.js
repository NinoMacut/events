/**
 * Created by Ucenik on 16.3.2017..
 */
/*
var mojGumbVar = document.getElementById("mojGumb");
mojGumbVar.onclick = function(){
    alert("Ovaj tekst će biti ispisan!");
}

document.getElementById("upis").addEventListener("mouseover",myCall);
function myCall(){
    document.getElementById("upis2").innerHTML = mojString;
}
var mojString = "Pozvali ste me!";
 */

document.getElementById("alerted").addEventListener("keydown",myFunction)
function myFunction(){
    alert("Ovaj tekst će biti ispisan!")
}

document.getElementById("alerted2").addEventListener("keyup",myFunction2)
function myFunction2(){
    alert("Ovaj tekst će biti ispisan!")
}

document.getElementById("alerted3").addEventListener("keypress",myFunction3)
function myFunction3(){
    alert("Ovaj tekst će biti ispisan!")
}

document.getElementById("alerted4").addEventListener("load",myFunction4)
function myFunction4(){
    alert("Ovaj tekst će biti ispisan kada se slika ucita!")
}