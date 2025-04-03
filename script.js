const PRICE_SIGA = 12;
let aantalDagen = 0;
let geldTotaal = 0;


function verhoogAantalDagen() {
    aantalDagen++;
    document.getElementById("countDagen").innerText = aantalDagen;
}

function verminderAantalDagen() {
    aantalDagen--;
    document.getElementById("countDagen").innerText = aantalDagen;
}


//Wanneer iemand + knopt drukt bij geld bespaard, tel de prijs van een pakje op IPV steeds 1 erbij.
function verhoogPrijs() {
    geldTotaal = PRICE_SIGA;
    document.getElementById("countMoney").innerText = geldTotaal;
}