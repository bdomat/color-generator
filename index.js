//Création des 3 variables

let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);
const colorValue = document.querySelector(".color-value");

//donner couleur de fond au body

//insérer couleur rgb dans body

const colorGenerator = () => {
  document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
  colorValue.textContent = `rgb(${red}, ${green}, ${blue})`;
};
setTimeout(colorGenerator, 10);
