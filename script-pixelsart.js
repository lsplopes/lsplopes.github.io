function createColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function createRGBcolor() {
  let RGBcolor = '(' + createColor(0, 255) + ', ' + createColor(0, 255) + ', ' + createColor(0, 255) + ')';
  return RGBcolor;
}

let paletteColors = ['black', 'rgb'+createRGBcolor(), 'rgb'+createRGBcolor(), 'rgb'+createRGBcolor()];

function paletteColoring (arrayColors){
  let palette = document.querySelectorAll('.color');
  for (let index in arrayColors) {
    palette[index].style.backgroundColor = arrayColors[index];
  }
}
paletteColoring(paletteColors);

function selectPaletteColor() {
  let paletteButtons = document.querySelector('#color-palette');
  paletteButtons.addEventListener('click', function(evento) {
    let previousChosenColor = document.querySelectorAll('.color');
    for (let index = 0; index < previousChosenColor.length; index += 1) {
      if (previousChosenColor[index].className === "color selected") {
        previousChosenColor[index].className = "color";
      }
    }
    if (evento.target.className === "color") {
      chosenColor = evento.target.className = 'color selected'
    }
  })
}
selectPaletteColor();

function pixelBoardColoring () {
  let pixelBoardButton = document.querySelector('#pixel-board');
  pixelBoardButton.addEventListener('click', function(evento) {
    if (evento.target.className !== "linhaPixel") { 
      let selectedPaletteColor = document.getElementsByClassName('color selected');
      evento.target.style.backgroundColor = selectedPaletteColor[0].style.backgroundColor;
    }
  })
}
pixelBoardColoring();

function limparQuadro() {
  let limparQuadroButton = document.querySelector('#clear-board');
  limparQuadroButton.addEventListener('click', function() {
    let clearBoard = document.querySelectorAll('.pixel');
    for (index = 0; index < clearBoard.length; index +=1) {
      clearBoard[index].style.backgroundColor = 'white';
    }
  })
}
limparQuadro();




// cria linhas (não requisitadas)



function createLine (tamanho) {
  for (index1 = 0; index1 < tamanho; index1 += 1) {
    let line = document.createElement('div');
    let whereToPlace = document.getElementById('pixel-board');
    line.className = "linhaPixel";
    line.id = index1;
    whereToPlace.appendChild(line);
  }
}

//cria blocos com caracteristicas

function createColuna () {
  let coluna = document.createElement('div');
  coluna.className = "pixel";
  coluna.style.backgroundColor = "white";
  coluna.style.display = "inline-block";
  return coluna;
}

// insere blocos nas colunas

function insereColunaLinha(tamanho) {
  const whereToPlace = document.querySelectorAll('.linhaPixel');
  for (let index = 0; index < tamanho; index += 1){
    const bloco = createColuna();
    for (let index2 = 0; index2 < tamanho; index2 += 1) {
      const bloco = createColuna();
      whereToPlace[index2].append(bloco);
    }
  }
}
//GERADOR DE QUADROS INICIAIS
createLine(5);
insereColunaLinha(5);

//cria função que gera os quadros
function geradorDeQuadros() {
  let getvalue = document.querySelector('#board-size');
  let getNumber = getvalue.value;
  console.log(getNumber);
  if (getNumber > 4 && getNumber < 51) {
    createLine(getNumber);
    insereColunaLinha(getNumber);
  }
  else if (getNumber == null || getNumber =='') {
    alert('Board inválido!');
    return false;
  }
  else if (getNumber < 5) {
    createLine(5);
    insereColunaLinha(5);
  }
  else if (getNumber > 50) {
    createLine(50);
    insereColunaLinha(50);
  }
}

//cria função que limpa os quadros para a função de criar começar do zero

function clearBoard() {
  const quadroInteiro = document.getElementById('pixel-board');
  const linhasAApagar = quadroInteiro.childNodes.length - 2;
    for (let index = linhasAApagar; index >= 0; index -= 1) {
      let itensAApagar = document.getElementById(index);
      itensAApagar.remove();
      console.log(index);
  }
}


// da atividade ao botão vqv
let criaComBotaoVQV = document.querySelector('#generate-board');

criaComBotaoVQV.addEventListener('click', function () {
  clearBoard();
  geradorDeQuadros();
});

