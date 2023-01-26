//Création des 3 variables

//donner couleur de fond au body

//insérer couleur rgb dans body

function colorGenerator() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let colorValue = document.querySelector(".color-value");
  let rgb = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.background = rgb;
  colorValue.textContent = rgb;
}
setInterval(colorGenerator, 2000);
