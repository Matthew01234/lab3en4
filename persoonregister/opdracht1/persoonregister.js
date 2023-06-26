var data = {
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
 }



// Gegevens ophalen en weergeven
const voornaamElement = document.getElementById('voornaam');
const achternaamElement = document.getElementById('achternaam');
const nationaliteitElement = document.getElementById('nationaliteit');
const leeftijdElement = document.getElementById('leeftijd');
const gewichtElement = document.getElementById('gewicht');

voornaamElement.innerHTML = data.voornaam;
achternaamElement.innerHTML = data.achternaam;
nationaliteitElement.innerHTML = data.nationaliteit;
leeftijdElement.innerHTML = data.leeftijd;
gewichtElement.innerHTML = data.gewicht;