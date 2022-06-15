// cria função no botão para criar tarefas e inclui-las na lista ordenada
let criarTarefaButton = document.getElementById('criar-tarefa');
let criarTarefaEnter = document.getElementById('texto-tarefa');

criarTarefaButton.addEventListener('click', criartarefa);


function criartarefa() {
  let listaOrdenada = document.getElementById('lista-tarefas');
  let novaTarefa = document.createElement('li');
  let inputDeTarefa = document.getElementById('texto-tarefa');
  novaTarefa.innerText = inputDeTarefa.value;
  novaTarefa.className = 'nenhum';
  novaTarefa.id = whatNewChild();
  inputDeTarefa.value = '';  
  listaOrdenada.appendChild(novaTarefa);
}

// cria função que calcula o ultimo elemento criado e da o id correto para o novo

function whatNewChild() {
  let father = document.getElementById('lista-tarefas');
  if (father.childNodes.length <= 0) {
    let newChildId = 0;
    return newChildId;
  } 
  else {
    let whatChild = father.lastChild.id;
    let lastChild = parseInt(whatChild);
    let newChildId = lastChild + 1;
    return newChildId;
  }
}

//cria função de pintar o background da função selecionada de gray

let listaOrdenada = document.getElementById('lista-tarefas');
listaOrdenada.addEventListener('click', function(evento) {
    desmarcaTarefas()
    evento.target.style.backgroundColor = 'gray';  
})

// cria função para desmarcar tarefas

function desmarcaTarefas() {
  let listaOrdenada = document.getElementById('lista-tarefas');
  const tamanhoListaOrdenada = listaOrdenada.childNodes.length;
  for (index = 0; index < tamanhoListaOrdenada; index += 1) {
    listaOrdenada.childNodes[index].style.backgroundColor = 'unset';
  }
}

// cria função que marca tarefas completas

listaOrdenada.addEventListener('dblclick', function(evento) {
  if (evento.target.className === 'nenhum') {
    evento.target.style.textDecoration = 'line-through';
    evento.target.className = 'completed';
  }
  else if (evento.target.className === 'completed') {
    evento.target.style.textDecoration = 'unset';
    evento.target.className = 'nenhum';
  }
})

//cria botão de apagar todas tarefas

let apagaTudo = document.getElementById('apaga-tudo');

apagaTudo.addEventListener('click', function() {
  let listaOrdenada = document.getElementById('lista-tarefas');
  while (listaOrdenada.firstChild) {
    listaOrdenada.removeChild(listaOrdenada.firstChild);
  }
})

//cria botão de remover finalizados

let removerFinalizados = document.getElementById('remover-finalizados');

removerFinalizados.addEventListener('click', function() {
  let elementosFinalizados = document.querySelectorAll('.completed');
  const tamanhoFinalizados = elementosFinalizados.length;
  for (index = tamanhoFinalizados - 1; index >= 0; index -= 1) {
    elementosFinalizados[index].parentNode.removeChild(elementosFinalizados[index]);
  }
})

// cria função que salva tarefas no localstorage

let saveButton = document.getElementById('salvar-tarefas');

saveButton.addEventListener('click', function() {
  localStorage.clear();
  let elementsToSave = document.getElementById('lista-tarefas');
  const tamanhoListaOrdenada = elementsToSave.childNodes.length;
  for (index = 0; index < tamanhoListaOrdenada; index += 1) {
    localStorage.setItem('backGround' + [index], elementsToSave.childNodes[index].style.backgroundColor);
    localStorage.setItem('textDeco' + [index], elementsToSave.childNodes[index].style.textDecoration);
    localStorage.setItem('id' + [index], elementsToSave.childNodes[index].id);
    localStorage.setItem('class' + [index], elementsToSave.childNodes[index].className);
    localStorage.setItem('html'+[index], elementsToSave.childNodes[index].innerText);
    localStorage.setItem('finalIndex', [index]);
  }
})

// cria função que recupera as tarefas do localstorage

function updateTasks() {
  let lastTaskIndex = localStorage.getItem('finalIndex');
  let lastTaskNumber = parseInt(lastTaskIndex);
  for (let index = 0; index <= lastTaskNumber; index += 1) {
    let listaOrdenada = document.getElementById('lista-tarefas');
    let novaTarefa = document.createElement('li');
    novaTarefa.innerText = localStorage.getItem('html'+[index]);
    novaTarefa.className = localStorage.getItem('class'+[index]);
    novaTarefa.id = localStorage.getItem('id'+[index]);
    novaTarefa.style.backgroundColor = localStorage.getItem('backGround'+[index]);
    novaTarefa.style.textDecoration = localStorage.getItem('textDeco'+[index]);
    listaOrdenada.appendChild(novaTarefa);    
  }
}
updateTasks();

// cria função para selecionar o elemento gray

function elementoGray() {
  const listaOrdenada = document.getElementById('lista-tarefas');
  const tamanhoListaOrdenada = listaOrdenada.childNodes.length;
  let selectedElement;
  for (let index = 0; index < tamanhoListaOrdenada; index +=1) {
    let check = listaOrdenada.childNodes[index].style.backgroundColor;
    if (check === 'gray') {
      selectedElement = listaOrdenada.childNodes[index].id;
    }
  }
  return selectedElement;
}

// cria função para mover elemento gray para cima

let cimaBut = document.getElementById('mover-cima')
cimaBut.addEventListener('click', function(){
  let listaTarefas = document.getElementById('lista-tarefas');
  let tamanholistaTarefas = listaTarefas.childNodes.length;
  for (let index = 0; index < tamanholistaTarefas; index += 1) {
    let listaNodes = listaTarefas.childNodes[index].id;
    if (listaNodes === elementoGray()) {
      let elementoX = listaTarefas.childNodes[index];
      if(elementoX == listaTarefas.firstChild) {
        console.log('firt');
      }
      else {
        console.log('other')
        listaTarefas.insertBefore(elementoX, elementoX.previousSibling);
      }
    }
  }
})

// cria função para mover elemento gray para baixo

let baixoBut = document.getElementById('mover-baixo')
baixoBut.addEventListener('click', function(){
  let listaTarefas = document.getElementById('lista-tarefas');
  let tamanholistaTarefas = listaTarefas.childNodes.length;
  for (let index = 0; index < tamanholistaTarefas; index += 1) {
    let listaNodes = listaTarefas.childNodes[index].id;
    if (listaNodes === elementoGray()) {
      let elementoX = listaTarefas.childNodes[index];
      if(elementoX == listaTarefas.lastChild) {
      }
      else {
        elementoY = listaTarefas.childNodes[index+1];
        listaTarefas.insertBefore(elementoY, elementoX);
        break
      }
    }
  }
})

// cria botão remover selecionado e suas funcionalidades

let removeSelectBtn = document.getElementById('remover-selecionado');
removeSelectBtn.addEventListener('click', function() {
  let listaTarefas = document.getElementById('lista-tarefas');
  let tamanholistaTarefas = listaTarefas.childNodes.length;
  for (let index = 0; index < tamanholistaTarefas; index += 1) {
    let listaNodes = listaTarefas.childNodes[index].id;
    if (listaNodes === elementoGray()) {
      let elementApagado = listaTarefas.childNodes[index];
      elementApagado.remove();
      break
    }
  }
})