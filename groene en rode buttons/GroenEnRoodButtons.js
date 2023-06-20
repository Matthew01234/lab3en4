// De urge om alles in de header te maken was groot, Der stond dat je het niet in de body mocht zetten haha.
var body = document.getElementsByClassName('bgc').item(0);
var div = document.getElementById('container');
var btn1 = document.createElement('button');
var btn2 = document.createElement('button');
var btn3 = document.createElement('button');
var btns = [btn1, btn2, btn3]


body.style.backgroundColor = "grey";


div.style.backgroundColor = "white";
div.style.margin = "0 auto";
div.style.padding = "1em";
div.style.width = "25%";
div.style.display = "flex";
div.style.columnGap = "1.5em";
div.style.flexDirection = "row";
div.style.justifyContent = "space-between";

div.appendChild(btn1)
div.appendChild(btn2)
div.appendChild(btn3)


btn1.innerHTML = "irritante knop 1 ";
btn2.innerHTML = "irritante knop 2 ";
btn3.innerHTML = "irritante knop 3 ";

btn1.style.backgroundColor = "green";
btn2.style.backgroundColor = "red";
btn3.style.backgroundColor = "blue";

btns.forEach(btn => {
    btn.style.border = "none";
    btn.style.color = "white";
    btn.style.width = "10em";
    btn.style.height = "4em";
});

btn1.onclick = x => body.style.backgroundColor = "green"
btn2.onclick = x => body.style.backgroundColor = "red"
btn3.onclick = x => body.style.backgroundColor = "blue"


