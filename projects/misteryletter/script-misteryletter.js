// cria e da função para o botão criar carta

let button = document.getElementById('criar-carta');

button.addEventListener('click', function() {
  apagaCartaAnterior();
  criaCartaNova();
  contaPalavras();
})

//cria função que apaga carta anterior
function apagaCartaAnterior() {
  let cartaGerada2 = document.getElementById('carta-gerada');
  while(cartaGerada2.firstChild) {
    cartaGerada2.removeChild(cartaGerada2.firstChild);
  }
}
//cria função que conta palavras
function contaPalavras() {  
  let textInputer = document.getElementById('carta-texto');
  let textCaptured = textInputer.value.split(' ');
  const tamanhoTextCaptured = textCaptured.length;
  let cartaContador = document.getElementById('carta-contador');
  if (textCaptured[0] === ''){
    cartaContador.innerText = 0;
  } else {
    cartaContador.innerText = tamanhoTextCaptured;
  }
}

//cria função que gera os estilos doidos
function criaCartaNova() {  
  let textInputer = document.getElementById('carta-texto');
  let textCaptured = textInputer.value.split(' ');
  const tamanhoTextCaptured = textCaptured.length;
  console.log(tamanhoTextCaptured);
  //cria condicionante para campos vazios
  if (textCaptured[0] === ''){
    let cartaGerada = document.getElementById('carta-gerada');
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.'
  } else {
    //cria spans com cada palavra
    for (let index = 0; index < tamanhoTextCaptured; index += 1) {
      let newSpan = document.createElement('span');
      newSpan.innerText = textCaptured[index];
      newSpan.className += randomStyle();
      newSpan.className += randomSize();
      newSpan.className += randomIncli();
      newSpan.className += randomRot();
      const cartaGerada = document.getElementById('carta-gerada');
      cartaGerada.appendChild(newSpan);
    }
  }
}
// cria função de numeros aleatório
function numeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min)) + min;
}
// cria função de styles aleatórios
function randomStyle() {
  let arrayDeStyles = ['newspaper', 'magazine1', 'magazine2']
  return arrayDeStyles[numeroAleatorio(0, 3)];
}
// cria função de sizes aleatórios
function randomSize() {
  let arrayDeSizes = [' medium', ' big', ' reallybig']
  return arrayDeSizes[numeroAleatorio(0, 3)];
}
// cria função de rotações aleatórias
function randomRot() {
  let arrayDeInclis = [' rotateleft', ' rotateright']
  return arrayDeInclis[numeroAleatorio(0, 2)];
}
//cria função de inclinações aleatórias
function randomIncli() {
  let arrayDeInclis = [' skewleft', ' skewright']
  return arrayDeInclis[numeroAleatorio(0, 2)];
}
//cria função para alterar estilos ao clicar na palavra
let cartaGErada = document.getElementById('carta-gerada');
cartaGErada.addEventListener('click', function(evento) {
  evento.target.className = randomStyle();
  evento.target.className += randomSize();
  evento.target.className += randomRot();
  evento.target.className +=randomIncli();
})
//cria função que conta palavras