// Geef hier aan hvl buttons je wilt aan maken
var buttons = 30;
// pak hier een div met de id container uit groendenroodbuttons.html
var div = document.getElementById('container')
// 
var btns = []

// For loop die buttons aan maakt zolang i kleiner is dan buttons
for (let i = 0; i < buttons; i++) {
    // met deze line code maak je de buttons aan ne die geef je de data eronder
    var btn = document.createElement('button');
    btn.style.backgroundColor = "green";
    btn.style.fontSize = "2.5em"
    btn.style.width = "18%"
    btn.style.height = "3em";
    // Deze regel hier 2 onder is bedoeld om de tekst in de buttons te zetten dit is de i + 1 (i begint bij 0)
    // Het is of zo of die regel weg halen en dan bij het buttons invoeren +1 doen
    btn.innerHTML = i + 1;
    btns.push(btn)
    div.appendChild(btn)
}
// maak de buttons rood met deze code
btns.forEach(btn => {
    let clickCount = 0;
  
    btn.onclick = () => {
      clickCount++;
  
      if (clickCount === 1) {
        btn.style.backgroundColor = 'red';
      } else if (clickCount === 2) {
        btn.style.backgroundColor = 'purple';
      } else if (clickCount === 3) {
        btn.style.backgroundColor = 'blue';
      } else if (clickCount === 4) {
        btn.style.backgroundColor = 'black';
      } else if (clickCount === 5) {
        btn.style.display = 'none';
      }
    };
});

// alle extra div style om het te laten lijken naar het orgineel ontwerp
div.style.backgroundColor = "grey";
div.style.width = "50%";
div.style.margin = "auto";
div.style.marginTop = "1em";
div.style.padding = "1em";
div.style.justifyContent = "space-between"
div.style.display = "flex";
div.style.flexDirection = "row";
div.style.flexWrap = "wrap";
div.style.columnGap = "1em";
div.style.rowGap = "1em";