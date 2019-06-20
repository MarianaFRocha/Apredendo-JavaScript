
//var nomes = ["Diego", "Gabriel", "Lucas"];

var lista = document.createElement('ul');
var elementoInput = document.querySelector('#novoNome');
var elementoBtn = document.querySelector('button.Botao');

//console.log(elementoBtn);

elementoBtn.onclick = function(){
    var elementoLista = document.createElement('li');
    elementoLista.textContent = elementoInput.value;

    lista.appendChild(elementoLista);

}

/*
for (let index = 0; index < nomes.length; index++) {

    var elementoLista = document.createElement('li');
    elementoLista.textContent = nomes[index]; 

    lista.appendChild(elementoLista);
    
}
*/

var divPrincipal = document.querySelector('#app');

divPrincipal.appendChild(lista);

