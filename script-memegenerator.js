//coloca o texto dentro da div
let textoDoInput = document.getElementById('text-input');
textoDoInput.addEventListener('input', function () {
  let textoMeme = document.getElementById('meme-text');
  textoMeme.innerHTML = this.value;
})

//coloca a imagem dentro da section

let selectImage = document.getElementById('meme-insert');

selectImage.addEventListener('change', function(meme) {
  let leitor = new FileReader();
  leitor.onload = function() {
    var inserter = document.getElementById('meme-image');
    inserter.src = leitor.result;
  }
  leitor.readAsDataURL(meme.target.files[0]);
})

//colocar atividade nos botões fire water earth

let selectFire = document.getElementById('buttons');

selectFire.addEventListener('click', function(evento) {
  let borda = document.getElementById('meme-image-container');
  if (evento.target.id === 'fire') {
    borda.style.border = '3px red dashed';
  } else if (evento.target.id === 'water') {
    borda.style.border = '5px blue double';
  } else if (evento.target.id === 'earth') {
    borda.style.border = '6px green groove';
  }
})

//cria 4 imagens miniaturas

let memesProntos = document.getElementById('memesProntos');

memesProntos.addEventListener('click', function(evento) {
  let memeImage = document.getElementById('meme-image');
  if (evento.target.id === 'meme-1') {
    memeImage.src = evento.target.src;
  } else if (evento.target.id === 'meme-2') {
    memeImage.src = evento.target.src;
  } else if (evento.target.id === 'meme-3') {
    memeImage.src = evento.target.src;
  } else if (evento.target.id === 'meme-4') {
    memeImage.src = evento.target.src;
  }
})