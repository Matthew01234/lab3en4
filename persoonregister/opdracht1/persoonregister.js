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



 function displayPersonData(data) {
    const list = document.createElement('ul');
  
    const voornaamElement = document.createElement('li');
    voornaamElement.innerHTML = `Voornaam: ${data.voornaam}`;
    list.appendChild(voornaamElement);
  
    const achternaamElement = document.createElement('li');
    achternaamElement.innerHTML = `Achternaam: ${data.achternaam}`;
    list.appendChild(achternaamElement);
  
    const nationaliteitElement = document.createElement('li');
    nationaliteitElement.innerHTML = `Nationaliteit: ${data.nationaliteit}`;
    list.appendChild(nationaliteitElement);
  
    const leeftijdElement = document.createElement('li');
    leeftijdElement.innerHTML = `Leeftijd: ${data.leeftijd}`;
    list.appendChild(leeftijdElement);
  
    const gewichtElement = document.createElement('li');
    gewichtElement.innerHTML = `Gewicht: ${data.gewicht}`;
    list.appendChild(gewichtElement);
  
    document.body.appendChild(list);
  
    const lineBreak = document.createElement('hr');
    document.body.appendChild(lineBreak);
  }


  
  // Gegevens weergeven voor elke persoon
  displayPersonData(data1);
  displayPersonData(data2);
  displayPersonData(data3);
  displayPersonData(data4);
  displayPersonData(data5);
  displayPersonData(data6);
  displayPersonData(data7);
  displayPersonData(data8);
