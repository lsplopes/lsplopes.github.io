function createColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function createRGBcolor() {
  let RGBcolor = '(' + createColor(0, 255) + ', ' + createColor(0, 255) + ', ' + createColor(0, 255) + ')';
  return RGBcolor;
}

const RGBcolor = document.getElementById('rgb-color');

RGBcolor.innerText = createRGBcolor();

function createCircles() {
  for (index = 0; index < 6; index += 1) {
    let colorCircle = document.createElement('div');
    let whereToPlace = document.getElementById('colorsButtons');
    colorCircle.className = 'ball';
    colorCircle.style.borderRadius = '100%';
    let backColor = 'rgb' + createRGBcolor(0, 255);
    colorCircle.style.backgroundColor = backColor;
    colorCircle.style.border = '1px solid black';
    colorCircle.style.display = 'inline-block';
    colorCircle.style.padding = '30px';
    colorCircle.style.margin = '5px';
    colorCircle.id = index;
    whereToPlace.appendChild(colorCircle);
  }
  let random = createColor(0, 6);
  let chosenColor = document.getElementById(random);
  const RGBcolor = document.getElementById('rgb-color');
  let rgbColorText = RGBcolor.innerText;
  chosenColor.style.backgroundColor = 'rgb'+rgbColorText;
}
createCircles();

function initialText() {
  let textoInicial = document.getElementById('answer');
  textoInicial.innerText = 'Escolha uma cor'
}
initialText();

let contador = 0;

function gamePlay() {
  let bolas = document.querySelector('#colorsButtons');
  bolas.addEventListener('click', function(evento) {
    let eventoBack = evento.target.style.backgroundColor;
    let rgbColorText = 'rgb' + RGBcolor.innerText;   
    if (eventoBack === rgbColorText) {
      let textoInicial = document.getElementById('answer');
      textoInicial.innerText = 'Acertou!'
      contador += 3;
      placar();
    } else if (eventoBack !== rgbColorText) {
      let textoInicial = document.getElementById('answer');
      textoInicial.innerText = 'Errou! Tente novamente!'      
    }
  })
}
gamePlay();

function deleteBalls() {
  for (index = 0; index < 6; index += 1) {
    let bolasADeletar = document.getElementById(index);
    bolasADeletar.remove();
  }
}

let resetButton = document.querySelector('#reset-game');
resetButton.addEventListener('click', function() {
  const RGBcolor = document.getElementById('rgb-color');
  RGBcolor.innerText = createRGBcolor();
  deleteBalls();
  createCircles();
  initialText();
})


function placar () {
  let placar = document.getElementById('score');
  placar.innerText = contador;
}
placar();