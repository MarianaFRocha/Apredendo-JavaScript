
var listaPrincipal = document.querySelector('#app ul');
var btnAdicionar = document.querySelector('#app button');


var infoEstatica = JSON.parse(localStorage.getItem('Lista_Todo')) || [];

function renderTodos(){

    listaPrincipal.innerHTML = '';

    for(todo of infoEstatica){
        var novoElemento = document.createElement('li');
        novoElemento.textContent = todo;

        var linkElemento = document.createElement('a');
        linkElemento.setAttribute('href', '#');

        var posicao = infoEstatica.indexOf(todo);
        linkElemento.setAttribute('onclick', 'deleteToDo('+ posicao +')');

        var linkTxt = document.createTextNode('Excluir');

        linkElemento.appendChild(linkTxt);
        novoElemento.appendChild(linkElemento);
        listaPrincipal.appendChild(novoElemento);

    }
}

renderTodos();

function addTodo(){
    
    var inputTxt = document.querySelector('input.entrada');
    var inputElemento = inputTxt.value;

    infoEstatica.push(inputElemento);
    
    renderTodos();
    salvarTodo();
    
}

function deleteToDo(posicao) {
    //apagar um item do vetor apos a posicao informada
    infoEstatica.splice(posicao,1);
    renderTodos();
    salvarTodo();
}


function salvarTodo() {
    localStorage.setItem('Lista_Todo', JSON.stringify(infoEstatica));
}

btnAdicionar.onclick = addTodo;