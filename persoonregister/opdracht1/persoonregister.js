var data1 = {
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
 };

 var data2 = {
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
 };
 var data3 = {
    "voornaam": "Masud",
    "achternaam": "Mohammed",
    "nationaliteit": "Iraans",
    "leeftijd": 37,
    "gewicht": 79
 };
 var data4 = {
    "voornaam": "Marie",
    "achternaam": "Visser",
    "nationaliteit": "Belgische",
    "leeftijd": 42,
    "gewicht": 69
 };
 var data5 = {
    "voornaam": "Klaas",
    "achternaam": "Wever",
    "nationaliteit": "Nederlandse",
    "leeftijd": 73,
    "gewicht": 85
 };
 var data6 = {
    "voornaam": "Bjorn",
    "achternaam": "Hakke",
    "nationaliteit": "Zweeds",
    "leeftijd": 18,
    "gewicht": 71
 };
 var data7 = {
    "voornaam": "Jouke",
    "achternaam": "Dijkstra",
    "nationaliteit": "Fries",
    "leeftijd": 29,
    "gewicht": 82
 };
 var data8 = {
    "voornaam": "Bo",
    "achternaam": "Wáng",
    "nationaliteit": "Chinees",
    "leeftijd": 38,
    "gewicht": 65
 };



const personen = [data1, data2, data3, data4, data5, data6, data7, data8];
let filteredPersonen = [];

// Functie om gegevens van een persoon weer te geven
function displayPersonData(personen) {
  const list = document.createElement('ul');

  for (const data of personen) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      Voornaam: ${data.voornaam}<br>
      Achternaam: ${data.achternaam}<br>
      Nationaliteit: ${data.nationaliteit}<br>
      Leeftijd: ${data.leeftijd}<br>
      Gewicht: ${data.gewicht}
    `;
    list.appendChild(listItem);
  }

  const existingList = document.getElementById('personen-list');
  if (existingList) {
    document.body.removeChild(existingList);
  }

  list.id = 'personen-list';
  document.body.appendChild(list);
}

// Eventhandler voor de bevestigingsknop
function filterPersonen() {
  const inputLeeftijd = document.getElementById('leeftijd-input').value;
  filteredPersonen = personen.filter(data => data.leeftijd > inputLeeftijd);
  displayPersonData(filteredPersonen);
}

// Gegevens weergeven voor alle personen
displayPersonData(personen);

// Bevestigingsknop event listener
const bevestigKnop = document.getElementById('bevestig-knop');
bevestigKnop.addEventListener('click', filterPersonen);